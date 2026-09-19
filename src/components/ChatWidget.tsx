"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const API_BASE = "https://lk-chatbot-production.up.railway.app/api/webchat";
const TENANT_ID = process.env.NEXT_PUBLIC_TENANT_ID ?? "f340af30-c77f-4438-9c21-d952d7c52918";
const STORAGE_KEY = `lk_chat_session_${TENANT_ID}`;

interface Message {
  content: string;
  role: "user" | "assistant";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [showBubble, setShowBubble] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(false), 10000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setSessionId(stored);
  }, []);

  useEffect(() => {
    if (!open || !sessionId || messages.length > 0) return;
    fetch(`${API_BASE}/${TENANT_ID}/messages/${sessionId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.messages?.length > 0) setMessages(data.messages);
      })
      .catch(() => {});
  }, [open, sessionId, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200);
  }, [open]);

  const createSession = useCallback(async (): Promise<string> => {
    const res = await fetch(`${API_BASE}/${TENANT_ID}/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    const data = await res.json();
    const id = data.sessionId;
    localStorage.setItem(STORAGE_KEY, id);
    setSessionId(id);
    return id;
  }, []);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { content: text, role: "user" }]);
    setLoading(true);
    try {
      let sid = sessionId;
      if (!sid) sid = await createSession();
      const res = await fetch(`${API_BASE}/${TENANT_ID}/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sid, text }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { content: data.reply ?? "Desculpe, ocorreu um erro. Tente novamente.", role: "assistant" },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { content: "Não foi possível conectar. Tente novamente.", role: "assistant" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, i) =>
      urlRegex.test(part) ? (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline text-[#DC6D25]">
          {part}
        </a>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  if (!showBubble) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* Chat Window */}
      {open && (
        <div className="w-[360px] max-w-[calc(100vw-1.5rem)] h-[480px] max-h-[calc(100vh-7rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-[#122D4A]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#DC6D25]/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#DC6D25]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Assistente LK Digital</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-[10px] text-white/50">Online agora</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Fechar chat"
            >
              <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#F8F9FA]">
            {messages.length === 0 && !loading && (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-[#DC6D25]/10 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[#DC6D25]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-[#0f172a] mb-1">Olá! Como posso ajudar?</p>
                <p className="text-xs text-[#64748B]">Tire dúvidas sobre aquisição e conversão.</p>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[#DC6D25] text-white rounded-br-sm"
                    : "bg-white text-[#0f172a] rounded-bl-sm shadow-sm border border-gray-100"
                }`}>
                  {formatText(msg.content)}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100">
                  <div className="flex gap-1.5">
                    {[0, 150, 300].map((delay) => (
                      <span key={delay} className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: `${delay}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-gray-100 bg-white">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escreva sua mensagem..."
                rows={1}
                className="flex-1 resize-none bg-[#F8F9FA] rounded-xl px-4 py-2.5 text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none focus:ring-2 focus:ring-[#DC6D25]/20 max-h-24"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="w-10 h-10 rounded-xl bg-[#DC6D25] hover:bg-[#c05d1c] text-white flex items-center justify-center transition-colors disabled:opacity-40 flex-shrink-0"
                aria-label="Enviar mensagem"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-[#94a3b8] text-center mt-2">Assistente IA — LK Digital</p>
          </div>
        </div>
      )}

      {/* Tooltip */}
      {!open && showTooltip && (
        <div className="bg-white text-[#0f172a] text-sm px-4 py-2.5 rounded-lg shadow-xl border border-gray-100 max-w-[200px] animate-fade-up relative">
          <p className="text-xs leading-relaxed font-medium">
            Fale com nosso <span className="text-[#DC6D25]">assistente IA</span>
          </p>
          <div className="absolute bottom-[-6px] right-8 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" />
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => { setOpen(!open); setShowTooltip(false); }}
        aria-label={open ? "Fechar chat" : "Abrir assistente IA"}
        className="relative w-14 h-14 rounded-full bg-[#122D4A] hover:bg-[#1a3d63] text-white shadow-lg shadow-[#122D4A]/30 hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white" />
          </>
        )}
      </button>
    </div>
  );
}
