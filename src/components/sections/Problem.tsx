import { problem } from "@/config/site";

export default function Problem() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        {/* Eyebrow */}
        <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#DC6D25] mb-4">
          {problem.eyebrow}
        </p>

        {/* H2 */}
        <div className="max-w-narrow mb-6">
          <h2 className="font-display text-display-lg text-[#0f172a] text-balance">
            {problem.h2}
          </h2>
        </div>

        {/* Copy */}
        <p className="text-base md:text-lg text-[#64748B] max-w-2xl leading-relaxed mb-14">
          {problem.copy}
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problem.cards.map((card) => (
            <div
              key={card.number}
              className="group p-6 rounded-xl border border-gray-100 bg-[#F8F9FA] hover:border-[#DC6D25]/30 hover:bg-white hover:-translate-y-1 transition-all duration-300"
            >
              <p className="font-display text-4xl text-[#DC6D25]/20 font-bold mb-4 group-hover:text-[#DC6D25]/40 transition-colors">
                {card.number}
              </p>
              <h3 className="font-display text-lg text-[#122D4A] mb-3 font-semibold">
                {card.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
