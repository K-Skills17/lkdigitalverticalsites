import { about } from "@/config/site";

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#122D4A]">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <div>
            <h2 className="font-display text-display-lg text-white mb-8 text-balance">
              {about.h2}
            </h2>

            <div className="space-y-4">
              {about.copy.map((para, i) => (
                <p key={i} className={`text-base leading-relaxed ${i === 2 ? "text-[#DC6D25]/90 font-medium" : "text-white/55"}`}>
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#diagnostico"
                className="inline-flex items-center px-7 py-3.5 bg-[#DC6D25] hover:bg-[#c05d1c] text-white font-medium rounded-md transition-all duration-200 hover:-translate-y-[1px] hover:shadow-xl hover:shadow-[#DC6D25]/30 text-sm"
              >
                Falar com a LK Digital
              </a>
            </div>
          </div>

          {/* Right: Placeholder for founder photo */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm aspect-[4/5] rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center p-8">
              {/* This will be replaced with your photo */}
              <div className="w-16 h-16 rounded-full bg-[#DC6D25]/20 border border-[#DC6D25]/30 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#DC6D25]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <p className="text-xs text-white/30 tracking-wider">Foto do fundador</p>
              <p className="text-[11px] text-white/20 mt-1">Envie sua foto para incluir aqui</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
