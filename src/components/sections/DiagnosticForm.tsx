"use client";

import { useState } from "react";
import { diagnosticForm } from "@/config/site";

interface FormData {
  businessName: string;
  businessType: string;
  acquisitionChannels: string[];
  primaryProblem: string;
  name: string;
  whatsapp: string;
  email: string;
  company: string;
}

const INITIAL: FormData = {
  businessName: "",
  businessType: "",
  acquisitionChannels: [],
  primaryProblem: "",
  name: "",
  whatsapp: "",
  email: "",
  company: "",
};

export default function DiagnosticForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const totalSteps = 5;

  function toggleChannel(channel: string) {
    setForm((prev) => ({
      ...prev,
      acquisitionChannels: prev.acquisitionChannels.includes(channel)
        ? prev.acquisitionChannels.filter((c) => c !== channel)
        : [...prev.acquisitionChannels, channel],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erro ao enviar");
      setSubmitted(true);
    } catch {
      setError("Algo deu errado. Tente novamente ou nos contate via WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section id="diagnostico" className="py-20 md:py-28 bg-white">
        <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#DC6D25]/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#DC6D25]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-2xl text-[#122D4A] mb-3">Diagnóstico recebido</h3>
          <p className="text-[#64748B] text-sm leading-relaxed">
            Analisaremos as informações e entraremos em contato em breve via WhatsApp ou email.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="diagnostico" className="py-20 md:py-28 bg-white">
      <div className="max-w-lg mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#DC6D25] mb-3">DIAGNÓSTICO</p>
          <h2 className="font-display text-display-md text-[#0f172a] mb-3">Mapeie sua operação</h2>
          <p className="text-sm text-[#64748B]">5 perguntas. Sem compromisso.</p>
        </div>

        {/* Progress bar */}
        <div className="flex gap-1 mb-10">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                i < step ? "bg-[#DC6D25]" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <label className="block text-sm font-medium text-[#122D4A] mb-2">
                Qual é o nome do seu negócio?
              </label>
              <input
                type="text"
                value={form.businessName}
                onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                placeholder="Nome da empresa"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#DC6D25] focus:ring-2 focus:ring-[#DC6D25]/10 outline-none text-sm transition-all"
                required
              />
              <button
                type="button"
                onClick={() => form.businessName && setStep(2)}
                disabled={!form.businessName}
                className="mt-6 w-full py-3.5 bg-[#122D4A] hover:bg-[#1a3d63] disabled:opacity-40 text-white font-medium rounded-md text-sm transition-all"
              >
                Continuar
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <label className="block text-sm font-medium text-[#122D4A] mb-2">
                O que você vende?
              </label>
              <textarea
                value={form.businessType}
                onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                placeholder="Ex: Móveis planejados para projetos residenciais e comerciais"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#DC6D25] focus:ring-2 focus:ring-[#DC6D25]/10 outline-none text-sm resize-none transition-all"
                rows={3}
                required
              />
              <div className="flex gap-3 mt-6">
                <button type="button" onClick={() => setStep(1)} className="flex-1 py-3.5 border border-gray-200 text-[#64748B] hover:border-gray-300 rounded-md text-sm transition-all">
                  Voltar
                </button>
                <button
                  type="button"
                  onClick={() => form.businessType && setStep(3)}
                  disabled={!form.businessType}
                  className="flex-[2] py-3.5 bg-[#122D4A] hover:bg-[#1a3d63] disabled:opacity-40 text-white font-medium rounded-md text-sm transition-all"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <label className="block text-sm font-medium text-[#122D4A] mb-4">
                Como os clientes normalmente chegam até você? <span className="text-[#64748B] font-normal">(selecione todos)</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {diagnosticForm.acquisitionChannels.map((channel) => (
                  <button
                    key={channel}
                    type="button"
                    onClick={() => toggleChannel(channel)}
                    className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                      form.acquisitionChannels.includes(channel)
                        ? "border-[#DC6D25] bg-[#DC6D25]/10 text-[#DC6D25]"
                        : "border-gray-200 text-[#64748B] hover:border-gray-300"
                    }`}
                  >
                    {channel}
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                <button type="button" onClick={() => setStep(2)} className="flex-1 py-3.5 border border-gray-200 text-[#64748B] hover:border-gray-300 rounded-md text-sm transition-all">
                  Voltar
                </button>
                <button
                  type="button"
                  onClick={() => form.acquisitionChannels.length > 0 && setStep(4)}
                  disabled={form.acquisitionChannels.length === 0}
                  className="flex-[2] py-3.5 bg-[#122D4A] hover:bg-[#1a3d63] disabled:opacity-40 text-white font-medium rounded-md text-sm transition-all"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div>
              <label className="block text-sm font-medium text-[#122D4A] mb-4">
                Qual é o principal problema hoje?
              </label>
              <div className="space-y-2">
                {diagnosticForm.primaryProblems.map((prob) => (
                  <button
                    key={prob}
                    type="button"
                    onClick={() => setForm({ ...form, primaryProblem: prob })}
                    className={`w-full px-4 py-3.5 rounded-lg border text-sm text-left transition-all ${
                      form.primaryProblem === prob
                        ? "border-[#DC6D25] bg-[#DC6D25]/10 text-[#DC6D25] font-medium"
                        : "border-gray-200 text-[#64748B] hover:border-gray-300"
                    }`}
                  >
                    {prob}
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                <button type="button" onClick={() => setStep(3)} className="flex-1 py-3.5 border border-gray-200 text-[#64748B] hover:border-gray-300 rounded-md text-sm transition-all">
                  Voltar
                </button>
                <button
                  type="button"
                  onClick={() => form.primaryProblem && setStep(5)}
                  disabled={!form.primaryProblem}
                  className="flex-[2] py-3.5 bg-[#122D4A] hover:bg-[#1a3d63] disabled:opacity-40 text-white font-medium rounded-md text-sm transition-all"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {/* Step 5 */}
          {step === 5 && (
            <div>
              <label className="block text-sm font-medium text-[#122D4A] mb-4">
                Para onde enviamos o diagnóstico?
              </label>
              <div className="space-y-3">
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#DC6D25] focus:ring-2 focus:ring-[#DC6D25]/10 outline-none text-sm transition-all"
                  required
                />
                <input
                  type="tel"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  placeholder="WhatsApp (com DDD)"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#DC6D25] focus:ring-2 focus:ring-[#DC6D25]/10 outline-none text-sm transition-all"
                  required
                />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="E-mail"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#DC6D25] focus:ring-2 focus:ring-[#DC6D25]/10 outline-none text-sm transition-all"
                  required
                />
              </div>

              {error && (
                <p className="mt-3 text-sm text-red-500">{error}</p>
              )}

              <div className="flex gap-3 mt-6">
                <button type="button" onClick={() => setStep(4)} className="flex-1 py-3.5 border border-gray-200 text-[#64748B] hover:border-gray-300 rounded-md text-sm transition-all">
                  Voltar
                </button>
                <button
                  type="submit"
                  disabled={loading || !form.name || !form.whatsapp || !form.email}
                  className="flex-[2] py-3.5 bg-[#DC6D25] hover:bg-[#c05d1c] disabled:opacity-40 text-white font-medium rounded-md text-sm transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    "Quero meu diagnóstico"
                  )}
                </button>
              </div>

              <p className="mt-4 text-xs text-center text-[#64748B]">
                Sem spam. Sem compromisso. Apenas análise.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
