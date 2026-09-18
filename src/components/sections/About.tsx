import Image from "next/image";
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

          {/* Right: Founder photo */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Orange accent border */}
              <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-[#DC6D25]/40 via-transparent to-[#DC6D25]/10" aria-hidden="true" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#0d2038]">
                <Image
                  src="/images/founder-2.jpg"
                  alt="Fundador da LK Digital"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 384px"
                  priority={false}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
