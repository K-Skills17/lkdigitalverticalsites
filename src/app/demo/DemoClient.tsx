"use client";
import { useState, useEffect, useRef } from "react";

type Role = "bot" | "user";
interface Msg { id: number; role: Role; text: string; }
interface Lead {
  ambiente?: string; chaves?: string; planta?: string;
  investimento?: string; prazo?: string; nome?: string; horario?: string;
}
type Status = "aguardando" | "triagem" | "qualificado" | "morno" | "curioso";
type Step = "inicio" | "ambiente" | "chaves" | "planta" | "investimento" | "prazo" | "nome" | "horario" | "fim";

const SCORE: Record<string, number> = {
  "Já tenho as chaves": 2, "Recebo em até 3 meses": 2, "Recebo em mais de 3 meses": 1, "Ainda procurando imóvel": 0,
  "Tenho a planta": 2, "Tenho as medidas": 2, "Ainda não": 0,
  "Até R5mil": 1, "R5a15mil": 2, "R15a30mil": 2, "Acima R30mil": 2, "Ainda não sei": 0,
  "Até 60 dias": 2, "2 a 4 meses": 2, "Mais de 4 meses": 1, "Só pesquisando por enquanto": 0,
};
const BTNS_INVEST = ["Até R$ 5 mil","R$ 5 a 15 mil","R$ 15 a 30 mil","Acima de R$ 30 mil","Ainda não sei"];
const BTNS_CHAVES = ["Já tenho as chaves","Recebo em até 3 meses","Recebo em mais de 3 meses","Ainda procurando imóvel"];
const BTNS_PLANTA = ["Tenho a planta","Tenho as medidas","Ainda não"];
const BTNS_PRAZO  = ["Até 60 dias","2 a 4 meses","Mais de 4 meses","Só pesquisando por enquanto"];

function toScoreKey(s: string): string {
  const map: Record<string,string> = {
    "Até R$ 5 mil":"Até R5mil","R$ 5 a 15 mil":"R5a15mil",
    "R$ 15 a 30 mil":"R15a30mil","Acima de R$ 30 mil":"Acima R30mil",
  };
  return map[s] ?? s;
}
function calcScore(d: Lead) {
  return (SCORE[toScoreKey(d.chaves ?? "")] ?? 0) + (SCORE[toScoreKey(d.planta ?? "")] ?? 0) +
    (SCORE[toScoreKey(d.investimento ?? "")] ?? 0) + (SCORE[toScoreKey(d.prazo ?? "")] ?? 0);
}
function isDisq(d: Lead) {
  return d.chaves === "Ainda procurando imóvel" || d.prazo === "Só pesquisando por enquanto";
}
function classify(d: Lead): "qualificado" | "morno" | "curioso" {
  if (isDisq(d)) return "curioso";
  const s = calcScore(d);
  if (s >= 7) return "qualificado";
  if (s >= 4) return "morno";
  return "curioso";
}

function extractAmb(text: string): string | null {
  const t = text.toLowerCase();
  if (/cozinha/.test(t)) return "Cozinha";
  if (/closet/.test(t)) return "Closet";
  if (/banh/.test(t)) return "Banheiro";
  if (/arm.rio|guarda.roupa|dormit.rio|quarto/.test(t)) return "Dormitório";
  if (/casa completa|apartamento completo/.test(t)) return "Casa completa";
  return null;
}
function mChaves(t: string): string | null {
  const s = t.toLowerCase();
  if (/j. tenho|tenho as chaves/.test(s)) return "Já tenho as chaves";
  if (/procurando im.vel|ainda procurando/.test(s)) return "Ainda procurando imóvel";
  if (/at. 3 meses|em 2 meses|em 1 m.s|recebo em at/.test(s)) return "Recebo em até 3 meses";
  if (/mais de 3|4 meses|5 meses|6 meses|ano|recebo em mais/.test(s)) return "Recebo em mais de 3 meses";
  return null;
}
function mPlanta(t: string): string | null {
  const s = t.toLowerCase();
  if (/tenho a planta|tenho planta/.test(s)) return "Tenho a planta";
  if (/tenho as medidas|tenho medida/.test(s)) return "Tenho as medidas";
  if (/ainda n.o|n.o tenho|sem planta|sem medida/.test(s)) return "Ainda não";
  return null;
}
function mInvest(t: string): string | null {
  const s = t.toLowerCase();
  if (/n.o sei|sem ideia/.test(s)) return "Ainda não sei";
  const milM = s.match(/(\d+(?:[.,]\d+)?)\s*mil/);
  const rawM = s.replace(/[^0-9]/g, "").match(/(\d{4,})/);
  let val: number | null = null;
  if (milM) val = parseFloat(milM[1].replace(",", ".")) * 1000;
  else if (rawM) val = parseInt(rawM[1], 10);
  if (val !== null) {
    if (val < 5000) return "Até R$ 5 mil";
    if (val < 15000) return "R$ 5 a 15 mil";
    if (val <= 30000) return "R$ 15 a 30 mil";
    return "Acima de R$ 30 mil";
  }
  if (/at. 5|menos de 5/.test(s)) return "Até R$ 5 mil";
  if (/5 a 15|uns 10|dez mil/.test(s)) return "R$ 5 a 15 mil";
  if (/15 a 30|uns 20|vinte/.test(s)) return "R$ 15 a 30 mil";
  if (/acima de 30|mais de 30|trinta/.test(s)) return "Acima de R$ 30 mil";
  return null;
}
function mPrazo(t: string): string | null {
  const s = t.toLowerCase();
  if (/pesquisando por enquanto|por enquanto|sem pressa|so pesquisando/.test(s)) return "Só pesquisando por enquanto";
  if (/mais de 4|5 meses|6 meses|meio ano|ano que vem/.test(s)) return "Mais de 4 meses";
  if (/2 a 4|3 meses|4 meses|uns 3/.test(s)) return "2 a 4 meses";
  if (/60 dias|at. 60|em 2 meses|dois meses|urgente|preciso logo/.test(s)) return "Até 60 dias";
  return null;
}

type QStep = "chaves" | "planta" | "investimento" | "prazo";
const QS: Record<QStep, { q: string; btns: string[]; m: (t: string) => string | null }> = {
  chaves:      { q: "Você já está com as chaves do imóvel?",         btns: BTNS_CHAVES,  m: mChaves },
  planta:      { q: "Tem a planta ou as medidas do ambiente?",       btns: BTNS_PLANTA,  m: mPlanta },
  investimento:{ q: "Quanto você pretende investir nesse ambiente?", btns: BTNS_INVEST,  m: mInvest },
  prazo:       { q: "Pra quando você precisa do projeto pronto?",    btns: BTNS_PRAZO,   m: mPrazo  },
};
const ORDER: QStep[] = ["chaves","planta","investimento","prazo"];

const SC: Record<Status,{label:string;color:string;dot:string}> = {
  aguardando:  { label:"Aguardando cliente",                              color:"text-white/40",   dot:"bg-white/30" },
  triagem:     { label:"Em triagem — atendimento automático",             color:"text-yellow-400", dot:"bg-yellow-400" },
  qualificado: { label:"Lead qualificado — enviado ao vendedor",          color:"text-green-400",  dot:"bg-green-400" },
  morno:       { label:"Em acompanhamento — retorno automático agendado", color:"text-blue-400",   dot:"bg-blue-400" },
  curioso:     { label:"Curioso — foi para a sequência automática",       color:"text-[#DC6D25]",  dot:"bg-[#DC6D25]" },
};

export default function DemoClient() {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [step, setStep] = useState<Step>("inicio");
  const [lead, setLead] = useState<Lead>({});
  const [status, setStatus] = useState<Status>("aguardando");
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [btns, setBtns] = useState<string[]>(["Quanto fica um armário?","Quero orçamento de cozinha","Vocês fazem closet?"]);
  const [vTime, setVTime] = useState("0 min");
  const [vNote, setVNote] = useState("");
  const idRef = useRef(0);
  const busy = useRef(false);
  const endRef = useRef<HTMLDivElement>(null);

  const push = (role: Role, text: string) =>
    setMsgs(p => [...p, { id: ++idRef.current, role, text }]);
  const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

  async function say(texts: string[], ms = 750) {
    for (const t of texts) {
      setTyping(true); await sleep(ms); setTyping(false);
      push("bot", t); await sleep(120);
    }
  }

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing]);
  useEffect(() => {
    push("bot", "Mande uma mensagem como se tivesse visto um anúncio da Cedro.");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function reset() {
    busy.current = false; idRef.current = 0;
    setMsgs([]); setStep("inicio"); setLead({}); setStatus("aguardando");
    setTyping(false); setInput("");
    setBtns(["Quanto fica um armário?","Quero orçamento de cozinha","Vocês fazem closet?"]);
    setVTime("0 min"); setVNote("");
    setTimeout(() => push("bot","Mande uma mensagem como se tivesse visto um anúncio da Cedro."), 50);
  }

  async function askQ(s: QStep) {
    await say([QS[s].q]); setStep(s); setBtns(QS[s].btns);
  }

  async function finalize(fl: Lead) {
    const r = classify(fl);
    if (r === "qualificado") {
      await say(["Perfeito! Seu projeto tem tudo pra sair do papel.", "Como você se chama?"]);
      setStep("nome"); setBtns([]);
    } else if (r === "morno") {
      setStatus("morno");
      setVNote("O vendedor não foi acionado. O sistema volta a chamar esse cliente sozinho.");
      await say([
        "Ótimo, já dá pra adiantar bastante.",
        "Vou te mandar um guia rápido de como tirar as medidas e alguns projetos parecidos com o seu. Te chamo de novo na próxima semana pra seguirmos, combinado?",
      ]);
      setStep("fim"); setBtns([]);
    } else {
      setStatus("curioso");
      setVNote("Ninguém da equipe gastou tempo com essa conversa. E o cliente não foi perdido: recebe conteúdo até estar pronto.");
      await say([
        "Sem problema! Enquanto você decide, vou te mandar ideias de projetos e faixas de investimento por ambiente.",
        "Quando estiver com as chaves na mão, é só me chamar aqui que a gente monta o seu projeto.",
      ]);
      setStep("fim"); setBtns([]);
    }
  }

  async function handleSend(text: string) {
    const t = text.trim();
    if (!t || busy.current || typing) return;
    busy.current = true; setInput(""); push("user", t); setBtns([]);
    const cs = step; const cl = { ...lead };
    try {
      if (cs === "inicio") {
        setStatus("triagem");
        const amb = extractAmb(t);
        const hasPrice = /quanto|pre.o|valor|or.amento|custa|fica/.test(t.toLowerCase());
        const greet = hasPrice
          ? "Boa pergunta! O valor muda bastante com medida, material e acabamento, então prefiro não te passar um número que não vale."
          : "Oi! Que bom que você chamou a Cedro.";
        const intro = "Pra te passar um orçamento de verdade, preciso de 4 respostas rápidas. Leva menos de 1 minuto.";
        if (amb) {
          const nl: Lead = { ambiente: amb }; setLead(nl);
          await say([greet, intro, "Anotei aqui: " + amb + "."]);
          await askQ("chaves");
        } else {
          await say([greet, intro, "Qual ambiente você quer planejar?"]);
          setStep("ambiente"); setBtns(["Cozinha","Dormitório","Closet","Banheiro","Casa completa"]);
        }
      } else if (cs === "ambiente") {
        const amb = extractAmb(t) ?? t;
        const nl: Lead = { ...cl, ambiente: amb }; setLead(nl);
        await askQ("chaves");
      } else if (cs === "chaves" || cs === "planta" || cs === "investimento" || cs === "prazo") {
        const cfg = QS[cs]; const matched = cfg.m(t);
        if (!matched) {
          await say(["Só pra eu anotar certinho, escolhe a opção mais próxima:"]);
          setBtns(cfg.btns);
        } else {
          const nl = { ...cl, [cs]: matched }; setLead(nl);
          const idx = ORDER.indexOf(cs); const next = ORDER[idx + 1];
          if (!next) await finalize(nl); else await askQ(next);
        }
      } else if (cs === "nome") {
        const nome = t || "você";
        const nl = { ...cl, nome }; setLead(nl);
        await say(["Prazer, " + nome + "! Qual o melhor período pra nossa projetista te ligar?"]);
        setStep("horario"); setBtns(["Manhã","Tarde","Noite"]);
      } else if (cs === "horario") {
        const nl = { ...cl, horario: t }; setLead(nl);
        setStatus("qualificado"); setVTime("Entra agora");
        setVNote("O vendedor recebe essa ficha pronta e liga já sabendo ambiente, prazo e investimento. Nenhuma pergunta repetida.");
        await say(["Fechado! A Ana, nossa projetista, vai te chamar nesse período com algumas ideias pro seu projeto."]);
        setStep("fim"); setBtns([]);
      }
    } finally { busy.current = false; }
  }

  const sc = SC[status];
  const fichaFields: { label: string; key: keyof Lead }[] = [
    { label: "Ambiente", key: "ambiente" },
    { label: "Chaves do imóvel", key: "chaves" },
    { label: "Planta ou medidas", key: "planta" },
    { label: "Investimento", key: "investimento" },
    { label: "Prazo", key: "prazo" },
    { label: "Nome", key: "nome" },
    { label: "Melhor horário", key: "horario" },
  ];

  return (
    <div className="min-h-screen bg-[#0d1829] font-body">
      <div className="bg-[#122D4A] border-b border-white/10 px-4 sm:px-6 py-3 flex items-center justify-between">
        <div>
          <p className="text-white font-semibold text-sm">Cedro Planejados</p>
          <p className="text-white/40 text-xs">Loja fictícia — é assim que o seu cliente vê o filtro</p>
        </div>
        <span className="text-xs bg-[#DC6D25]/20 text-[#DC6D25] border border-[#DC6D25]/30 px-2.5 py-1 rounded-full font-medium whitespace-nowrap">Demonstração</span>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
        <div className="bg-[#122D4A]/60 border border-white/10 rounded-xl p-4 text-sm text-white/70 leading-relaxed">
          <span className="text-white font-medium">Teste duas vezes.</span>{" "}
          Primeiro como curioso: pergunte &ldquo;quanto fica um armário?&rdquo; e responda que ainda está procurando imóvel.
          Depois como comprador: já tem as chaves, tem a planta e precisa em 60 dias.
          Veja o que chega pro vendedor em cada caso.
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-10 flex flex-col lg:flex-row gap-4">
        <div className="flex-1 flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#122D4A]/40">
          <div className="bg-[#1a3d63] px-4 py-3 flex items-center gap-3 border-b border-white/10">
            <div className="w-9 h-9 rounded-full bg-[#DC6D25] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">C</div>
            <div className="flex-1">
              <p className="text-white font-medium text-sm">Cedro Planejados</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <p className="text-green-400 text-xs">online</p>
              </div>
            </div>
            <button onClick={reset} className="text-xs text-white/50 hover:text-white border border-white/20 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap">Recomeçar teste</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2 min-h-[300px] max-h-[400px]">
            {msgs.map(m => (
              <div key={m.id} className={"flex " + (m.role === "user" ? "justify-end" : "justify-start")}>
                <div className={"max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed " +
                  (m.role === "user" ? "bg-[#DC6D25] text-white rounded-br-sm" : "bg-white/10 text-white/90 rounded-bl-sm")}>
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1 items-center h-3">
                    {[0,1,2].map(i => (
                      <span key={i} className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"
                        style={{ animationDelay: (i * 150) + "ms" }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>
          {btns.length > 0 && step !== "fim" && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {btns.map(b => (
                <button key={b} onClick={() => handleSend(b)} disabled={typing}
                  className="text-xs border border-[#DC6D25]/60 text-[#DC6D25] hover:bg-[#DC6D25] hover:text-white disabled:opacity-40 px-3 py-1.5 rounded-full transition-colors">
                  {b}
                </button>
              ))}
            </div>
          )}
          <div className="px-4 pb-4 pt-1">
            <div className="flex gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
              <input type="text" value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter" && !typing && step !== "fim") handleSend(input); }}
                placeholder={step === "fim" ? "Conversa encerrada" : "Digite uma mensagem…"}
                disabled={step === "fim" || typing}
                className="flex-1 bg-transparent text-white/90 placeholder-white/25 text-sm outline-none disabled:opacity-40" />
              <button onClick={() => handleSend(input)} disabled={step === "fim" || typing || !input.trim()}
                aria-label="Enviar"
                className="w-8 h-8 bg-[#DC6D25] hover:bg-[#c05d1c] disabled:opacity-30 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="rounded-2xl border border-white/10 bg-[#122D4A]/40 overflow-hidden">
            <div className="bg-[#1a3d63] px-4 py-3 border-b border-white/10">
              <p className="text-white font-semibold text-sm">O que chega pro vendedor</p>
              <p className="text-white/40 text-xs mt-0.5 leading-relaxed">A ficha se preenche sozinha. O vendedor só entra quando o cliente passa no filtro.</p>
            </div>
            <div className="px-4 py-3 border-b border-white/10">
              <p className="text-white/35 text-[10px] uppercase tracking-widest mb-1.5">Status</p>
              <div className="flex items-start gap-2">
                <span className={"w-2 h-2 rounded-full flex-shrink-0 mt-1 " + sc.dot} />
                <span className={"text-sm font-medium leading-snug " + sc.color}>{sc.label}</span>
              </div>
            </div>
            <div className="px-4 py-3 space-y-3">
              {fichaFields.map(({ label, key }) => (
                <div key={key}>
                  <p className="text-white/35 text-xs">{label}</p>
                  <p className={"text-sm mt-0.5 " + (lead[key] ? "text-white" : "text-white/20")}>
                    {lead[key] ?? "—"}
                  </p>
                </div>
              ))}
            </div>
            <div className="px-4 py-3 border-t border-white/10">
              <p className="text-white/35 text-xs">Tempo do vendedor gasto nessa conversa</p>
              <p className={"text-xl font-semibold mt-1 " + (vTime === "Entra agora" ? "text-green-400" : "text-white/20")}>
                {vTime}
              </p>
            </div>
            {vNote && (
              <div className="px-4 pb-4 border-t border-white/10 pt-3">
                <p className="text-xs text-white/50 leading-relaxed">{vNote}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
