import { process } from "@/config/site";

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-[#122D4A]">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-lg text-white text-balance max-w-2xl mx-auto">
            {process.h2}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector */}
              {i < process.steps.length - 1 && (
                <div className="hidden lg:block absolute top-[52px] left-full w-6 h-[1px] bg-white/15 z-10" aria-hidden="true" />
              )}

              <div className="group p-7 rounded-xl bg-white/5 border border-white/10 hover:border-[#DC6D25]/40 hover:bg-white/[0.08] transition-all duration-300 h-full">
                {/* Step number circle */}
                <div className="w-12 h-12 rounded-full border border-[#DC6D25]/40 bg-[#DC6D25]/10 flex items-center justify-center mb-6">
                  <span className="font-display text-sm text-[#DC6D25] font-semibold">{step.number}</span>
                </div>

                <h3 className="font-display text-lg text-white mb-3 font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#diagnostico"
            className="inline-flex items-center px-7 py-3.5 bg-[#DC6D25] hover:bg-[#c05d1c] text-white font-medium rounded-md transition-all duration-200 hover:-translate-y-[1px] hover:shadow-xl hover:shadow-[#DC6D25]/30 text-sm"
          >
            Começar com um diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
}
