import { system } from "@/config/site";

export default function SystemFramework() {
  return (
    <section id="solucoes" className="py-20 md:py-28 bg-[#122D4A] overflow-hidden">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#DC6D25] mb-4">
            {system.eyebrow}
          </p>
          <h2 className="font-display text-display-lg text-white text-balance">
            {system.h2}
          </h2>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden="true" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {system.steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center group">
                {/* Circle */}
                <div className="relative w-[100px] h-[100px] rounded-full bg-white/5 border border-white/15 flex flex-col items-center justify-center mb-6 group-hover:border-[#DC6D25]/50 group-hover:bg-[#DC6D25]/10 transition-all duration-300 flex-shrink-0">
                  <span className="text-[10px] text-[#DC6D25]/70 font-medium tracking-[0.2em] mb-1">{step.number}</span>
                  <span className="font-display text-sm text-white font-semibold tracking-wide">{step.title}</span>
                </div>

                {/* Items */}
                <ul className="space-y-1.5">
                  {step.items.map((item) => (
                    <li key={item} className="text-xs text-white/45 group-hover:text-white/65 transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Mobile connector arrow */}
                {i < system.steps.length - 1 && (
                  <div className="lg:hidden my-4 text-[#DC6D25]/40">
                    <svg className="w-4 h-4 mx-auto" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 12L2 6h12L8 12z"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer statement */}
        <p className="mt-14 text-center text-sm text-white/40 max-w-xl mx-auto leading-relaxed border-t border-white/10 pt-8">
          {system.footer}
        </p>
      </div>
    </section>
  );
}
