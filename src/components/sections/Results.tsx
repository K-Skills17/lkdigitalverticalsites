import { results } from "@/config/site";

export default function Results() {
  return (
    <section id="resultados" className="py-20 md:py-28 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <h2 className="font-display text-display-lg text-[#0f172a] mb-4">
            {results.h2}
          </h2>
          <p className="text-sm text-[#64748B]">Projetos verificados. Sem métricas inventadas.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {results.items.map((item) => (
            <div
              key={item.client}
              className="p-8 rounded-2xl border border-gray-100 bg-[#F8F9FA] hover:border-[#122D4A]/15 hover:bg-white hover:shadow-lg hover:shadow-[#122D4A]/5 transition-all duration-300"
            >
              {/* Client badge */}
              <div className="inline-flex px-3 py-1 rounded-full bg-[#122D4A]/5 text-[11px] font-medium text-[#122D4A] tracking-wider uppercase mb-5">
                {item.client}
              </div>

              <h3 className="font-display text-lg text-[#122D4A] mb-3 font-semibold leading-tight">
                {item.result}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Experiments note */}
        <div className="p-6 rounded-xl border border-[#DC6D25]/20 bg-[#DC6D25]/5 flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-[#DC6D25]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-[#DC6D25]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-[#122D4A] mb-1">Experimentos atuais</p>
            <p className="text-sm text-[#64748B]">{results.experimentsNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
