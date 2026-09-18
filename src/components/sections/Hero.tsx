import { hero } from "@/config/site";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#122D4A]"
      aria-label="Seção principal"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#122D4A] via-[#1a3d63] to-[#0d2038]" aria-hidden="true" />
      {/* Fine grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />
      {/* Orange glow accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#DC6D25]/10 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 pt-28 pb-20 md:pt-40 md:pb-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div>
            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#DC6D25]/30 bg-[#DC6D25]/10 text-[#DC6D25] text-[11px] font-medium tracking-[0.3em] uppercase mb-6 animate-hero-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC6D25] animate-pulse" />
              {hero.eyebrow}
            </p>

            {/* H1 */}
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.08] text-white text-balance mb-6 animate-hero-fade-in [animation-delay:150ms]">
              {hero.h1}
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-white/55 max-w-xl leading-relaxed mb-10 animate-hero-fade-in [animation-delay:300ms]">
              {hero.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 animate-hero-fade-in [animation-delay:450ms]">
              <a
                href="#diagnostico"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#DC6D25] hover:bg-[#c05d1c] text-white font-medium rounded-md transition-all duration-200 hover:-translate-y-[1px] hover:shadow-xl hover:shadow-[#DC6D25]/25 text-center text-sm"
              >
                {hero.cta}
              </a>
              <a
                href="#como-funciona"
                className="w-full sm:w-auto px-7 py-3.5 border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-medium rounded-md transition-all duration-200 text-center text-sm flex items-center justify-center gap-2"
              >
                {hero.ctaSecondary}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Flow Diagram */}
          <div className="hidden lg:flex flex-col items-center animate-hero-fade-in [animation-delay:300ms]">
            <div className="relative w-full max-w-sm">
              {hero.flow.map((step, i) => {
                const isLast = i === hero.flow.length - 1;
                const isOrange = i === 0 || i === hero.flow.length - 1;
                return (
                  <div key={step} className="flex flex-col items-center">
                    {/* Node */}
                    <div
                      className={`w-full px-6 py-3.5 rounded-lg border text-center transition-all duration-300 ${
                        isOrange
                          ? "bg-[#DC6D25]/20 border-[#DC6D25]/50 text-[#DC6D25]"
                          : "bg-white/5 border-white/15 text-white/80"
                      }`}
                      style={{ animationDelay: `${i * 150 + 500}ms` }}
                    >
                      <p className={`text-xs font-medium tracking-[0.15em] uppercase ${isOrange ? "text-[#DC6D25]" : "text-white/70"}`}>
                        {step}
                      </p>
                    </div>

                    {/* Connector */}
                    {!isLast && (
                      <div className="flex flex-col items-center my-1">
                        <div className="w-[1px] h-5 bg-gradient-to-b from-white/20 to-white/10" />
                        <svg className="w-3 h-3 text-[#DC6D25]/60" viewBox="0 0 12 12" fill="currentColor">
                          <path d="M6 9L1 4h10L6 9z"/>
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Label */}
            <p className="mt-6 text-xs text-white/30 tracking-[0.2em] uppercase text-center">
              Do interesse à oportunidade
            </p>
          </div>
        </div>

        {/* Mobile flow (simplified) */}
        <div className="lg:hidden mt-12 flex items-center justify-center gap-2 flex-wrap animate-hero-fade-in [animation-delay:500ms]">
          {["Procura", "→", "Qualificação", "→", "Oportunidade", "→", "Venda"].map((item, i) => (
            <span
              key={i}
              className={item === "→"
                ? "text-[#DC6D25]/50 text-sm"
                : "text-xs text-white/60 px-3 py-1.5 bg-white/5 rounded border border-white/10"
              }
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/25">
        <span className="text-[10px] uppercase tracking-[0.25em]">Rolar</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  );
}
