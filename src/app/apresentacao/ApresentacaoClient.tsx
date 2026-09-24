"use client";
import { useState } from "react";
import Link from "next/link";

function Slider({ label, value, min, max, step=1, fmt, onChange }: {
  label: string; value: number; min: number; max: number; step?: number;
  fmt?: (v: number) => string; onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-baseline">
        <label className="text-sm text-white/65">{label}</label>
        <span className="text-white font-semibold text-sm">{fmt ? fmt(value) : value}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))} className="w-full accent-[#DC6D25] cursor-pointer" />
      <div className="flex justify-between text-white/25 text-xs">
        <span>{fmt ? fmt(min) : min}</span><span>{fmt ? fmt(max) : max}</span>
      </div>
    </div>
  );
}

function Check() {
  return (
    <svg className="w-4 h-4 text-[#DC6D25] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20"
      stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l4 4 6-6" />
    </svg>
  );
}

const PLANOS = [
  {
    name: "Máquina Completa", highlight: true,
    implantacao: "R$ 7.997", mensalidade: "R$ 1.497/mês",
    items: [
      "Tudo do Filtro + Google",
      "Site completo otimizado para Google e para buscas por IA",
      "Página própria por ambiente: cozinha, dormitório, banheiro, closet, home office, área gourmet, casa completa",
      "Filtro com perguntas específicas de cada ambiente",
      "Chatbot em todo o site",
      "Todo mês: páginas novas e ajustes a partir do relatório",
    ],
  },
  {
    name: "Filtro + Google", highlight: false,
    implantacao: "R$ 3.997", mensalidade: "R$ 1.097/mês",
    items: [
      "Tudo do Filtro",
      "Otimização do Perfil da Empresa no Google: categorias, serviços por ambiente, fotos de projetos, descrição",
      "Pedido de avaliação automático após cada instalação",
      "Todo mês: publicações no perfil e respostas às avaliações",
    ],
  },
  {
    name: "Filtro", highlight: false,
    implantacao: "R$ 2.497", mensalidade: "R$ 797/mês",
    items: [
      "Página com a identidade da sua loja",
      "Atendente automático com as 4 perguntas",
      "Ficha do cliente qualificado enviada ao vendedor",
      "Acompanhamento automático dos curiosos",
      "Relatório semanal",
    ],
  },
];

const TIMELINE = [
  { label: "Hoje",       desc: "Caução via Pix e aceite dos termos" },
  { label: "Até 5 dias", desc: "Você envia fotos e informações da loja" },
  { label: "48h depois", desc: "Filtro no ar, com call de alinhamento" },
  { label: "14 dias",    desc: "Clientes passando pelo filtro, relatório semanal" },
  { label: "Dia 14",     desc: "Call de resultado e escolha do plano" },
];

export default function ApresentacaoClient() {
  const [contatos, setContatos] = useState(120);
  const [pct, setPct] = useState(75);
  const [minutos, setMinutos] = useState(15);
  const [proj3d, setProj3d] = useState(4);

  const horasConv = (contatos * (pct / 100) * minutos) / 60;
  const horasProj = proj3d * 3;
  const total = Math.round(horasConv + horasProj);
  const dias = (total / 8).toFixed(1);

  return (
    <div className="min-h-screen bg-[#0d1829] font-body text-white">

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-14">
        <div className="inline-flex items-end gap-2 mb-10">
          <div className="bg-white/10 border border-white/10 rounded-2xl rounded-bl-sm px-5 py-4 max-w-xs">
            <p className="text-white text-lg font-medium">&ldquo;Quanto fica um armário?&rdquo;</p>
            <p className="text-white/35 text-xs mt-1.5 text-right">Recebida às 23:47 ✓✓</p>
          </div>
        </div>
        <h1 className="font-display text-display-md text-white leading-tight mb-4">
          Sua equipe responde isso dezenas de vezes por semana. A maioria nunca vira visita.
        </h1>
        <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-xl">
          O Filtro de Curiosos atende primeiro, separa quem está pronto pra comprar e entrega pro vendedor só o cliente com chaves, planta, investimento e prazo definidos.
        </p>
      </section>

      <div className="border-t border-white/8" />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="font-display text-display-sm text-white mb-1">Quanto tempo os curiosos custam hoje</h2>
        <p className="text-white/50 text-sm mb-8">Coloque os números da sua loja.</p>
        <div className="bg-[#122D4A]/60 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-7">
          <Slider label="Contatos pedindo orçamento por mês" value={contatos} min={20} max={500} onChange={setContatos} />
          <Slider label="Quantos nunca viram visita" value={pct} min={30} max={95} fmt={v => v + "%"} onChange={setPct} />
          <Slider label="Minutos gastos em cada conversa" value={minutos} min={5} max={45} onChange={setMinutos} />
          <Slider label="Projetos 3D por mês pra quem sumiu" value={proj3d} min={0} max={20} onChange={setProj3d} />
        </div>
        <div className="mt-6 rounded-2xl bg-[#DC6D25]/10 border border-[#DC6D25]/25 p-6 sm:p-8 text-center">
          <p className="text-[#DC6D25] text-5xl sm:text-6xl font-bold font-display leading-none">{total}h</p>
          <p className="text-white font-semibold mt-2 text-lg">por mês da sua equipe com quem não compra</p>
          <p className="text-white/50 mt-1 text-sm">≈ {dias} dias inteiros de trabalho por mês</p>
          <p className="text-white/30 text-xs mt-3">Cada projeto 3D contado como 3 horas de projetista.</p>
        </div>
      </section>

      <div className="border-t border-white/8" />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="font-display text-display-sm text-white mb-10">Como o filtro funciona</h2>
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC6D25] text-white flex items-center justify-center font-bold text-sm">1</div>
            <div>
              <p className="text-white font-semibold">O cliente chama no WhatsApp ou clica no anúncio</p>
              <p className="text-white/55 text-sm mt-1 leading-relaxed">Recebe na hora o link do filtro, com a identidade da sua loja. Funciona 24h, inclusive às 23h47.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC6D25] text-white flex items-center justify-center font-bold text-sm">2</div>
            <div>
              <p className="text-white font-semibold">Responde 4 perguntas em menos de 1 minuto</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Já tem as chaves?","Tem planta ou medidas?","Quanto quer investir?","Pra quando precisa?"].map(tag => (
                  <span key={tag} className="text-xs border border-white/20 text-white/60 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC6D25] text-white flex items-center justify-center font-bold text-sm">3</div>
            <div className="flex-1">
              <p className="text-white font-semibold">O sistema separa</p>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                <div className="bg-green-500/10 border border-green-500/25 rounded-xl p-4">
                  <p className="text-green-400 font-semibold text-sm mb-1">Comprador</p>
                  <p className="text-white/60 text-sm leading-relaxed">O vendedor recebe a ficha pronta e liga já sabendo o que o cliente quer.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-white/70 font-semibold text-sm mb-1">Curioso</p>
                  <p className="text-white/40 text-sm leading-relaxed">Não ocupa ninguém. Entra num acompanhamento automático até estar pronto.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC6D25] text-white flex items-center justify-center font-bold text-sm">4</div>
            <div>
              <p className="text-white font-semibold">Você acompanha tudo num relatório semanal</p>
              <p className="text-white/55 text-sm mt-1 leading-relaxed">Quantos chegaram, quantos foram filtrados, quantos viraram visita.</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Link href="/demo" className="inline-flex items-center gap-2 bg-[#DC6D25] hover:bg-[#c05d1c] text-white px-6 py-3 rounded-xl font-medium transition-colors text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            Testar como se fosse cliente
          </Link>
        </div>
      </section>

      <div className="border-t border-white/8" />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="font-display text-display-sm text-white mb-2">Três formas de começar</h2>
        <p className="text-white/40 text-sm mb-8">Preço de fundador para as primeiras 15 lojas, travado enquanto você continuar.</p>
        <div className="space-y-4">
          {PLANOS.map(p => (
            <div key={p.name} className={"rounded-2xl border p-6 " + (p.highlight ? "bg-[#DC6D25]/10 border-[#DC6D25]/40" : "bg-[#122D4A]/40 border-white/10")}>
              {p.highlight && <span className="inline-block text-xs bg-[#DC6D25] text-white px-2.5 py-1 rounded-full font-medium mb-3">Mais completo</span>}
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                <h3 className="text-white font-display text-xl font-semibold">{p.name}</h3>
                <div className="text-right">
                  <p className="text-white/45 text-xs">Implantação</p>
                  <p className={"font-bold text-lg " + (p.highlight ? "text-[#DC6D25]" : "text-white")}>{p.implantacao}</p>
                  <p className="text-white/50 text-sm">{p.mensalidade}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {p.items.map(item => (
                  <li key={item} className="flex items-start gap-2"><Check /><span className="text-sm text-white/70 leading-relaxed">{item}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-white/30 text-xs mt-4 leading-relaxed">Qualquer plano começa pelo piloto de 14 dias.</p>
      </section>

      <div className="border-t border-white/8" />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="font-display text-display-sm text-white mb-6">Piloto de 14 dias com caução</h2>
        <div className="bg-[#DC6D25]/10 border border-[#DC6D25]/30 rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-[#DC6D25] text-3xl font-bold font-display mb-3">R$ 497 de caução.</p>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base">
            Se o filtro funcionar e você continuar, o valor é descontado da implantação.
            Se você fizer a sua parte e não chegarem pelo menos{" "}
            <strong className="text-white">5 clientes qualificados</strong>{" "}
            (com planta, investimento e prazo definidos), devolvemos tudo.
          </p>
        </div>
        <p className="text-white font-semibold mb-4">A devolução vale quando você:</p>
        <ol className="space-y-3">
          {[
            "Envia em até 5 dias: logo, fotos de pelo menos 8 projetos, ambientes que vende e região que atende.",
            "Direciona todos os novos contatos pelo filtro durante os 14 dias.",
            "Garante que pelo menos 30 contatos passem pelo filtro.",
            "Responde os clientes qualificados em até 24h.",
            "Participa da call de alinhamento e da call de resultado.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[#DC6D25]/50 text-[#DC6D25] text-xs font-bold flex items-center justify-center">{i+1}</span>
              <span className="text-white/70 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
        <p className="text-white/30 text-xs mt-6 leading-relaxed">
          Os 14 dias contam a partir do dia em que o filtro vai ao ar. Pedido de devolução até 3 dias após a call de resultado, pago em até 7 dias.
        </p>
      </section>

      <div className="border-t border-white/8" />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="font-display text-display-sm text-white mb-10">O que acontece depois do sim</h2>
        <div className="hidden sm:flex items-start">
          {TIMELINE.map((t, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center relative">
              {i < TIMELINE.length - 1 && <div className="absolute top-3.5 left-1/2 w-full h-px bg-[#DC6D25]/25" />}
              <div className="relative z-10 w-7 h-7 rounded-full bg-[#DC6D25] text-white text-xs font-bold flex items-center justify-center mb-3">{i+1}</div>
              <p className="text-[#DC6D25] font-semibold text-xs mb-1">{t.label}</p>
              <p className="text-white/50 text-xs leading-relaxed px-1">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="sm:hidden space-y-0">
          {TIMELINE.map((t, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-[#DC6D25] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{i+1}</div>
                {i < TIMELINE.length - 1 && <div className="w-px bg-[#DC6D25]/20 flex-1 min-h-[28px] mt-1 mb-1" />}
              </div>
              <div className="pb-4">
                <p className="text-[#DC6D25] font-semibold text-sm">{t.label}</p>
                <p className="text-white/55 text-sm mt-0.5 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/8 text-center py-8 text-white/25 text-sm">
        Filtro de Curiosos, por Komando
      </footer>
    </div>
  );
}
