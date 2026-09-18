"use client";

import { finalCta } from "@/config/site";

export default function CTAFinal() {
  return (
    <section className="py-20 md:py-28 bg-[#0d2038] relative overflow-hidden">
      {/* Orange glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#DC6D25]/8 blur-[120px] pointer-events-none" aria-hidden="true" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-narrow mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-display-lg text-white mb-6 text-balance">
          {finalCta.h2}
        </h2>
        <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed mb-10">
          {finalCta.copy}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#diagnostico"
            className="w-full sm:w-auto px-8 py-4 bg-[#DC6D25] hover:bg-[#c05d1c] text-white font-medium rounded-md transition-all duration-200 hover:-translate-y-[1px] hover:shadow-2xl hover:shadow-[#DC6D25]/30 text-center text-sm"
          >
            {finalCta.cta}
          </a>
          <a
            href={`https://wa.me/5511959920554?text=${encodeURIComponent("Olá, gostaria de saber mais sobre a LK Digital.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-medium rounded-md transition-all duration-200 text-center text-sm"
          >
            {finalCta.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
