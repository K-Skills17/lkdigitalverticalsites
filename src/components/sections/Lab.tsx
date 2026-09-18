import { lab } from "@/config/site";

export default function Lab() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F9FA] border-y border-gray-100">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#DC6D25] mb-4">
              {lab.eyebrow}
            </p>
            <h2 className="font-display text-display-md text-[#0f172a] mb-5 text-balance">
              {lab.h2}
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed max-w-md">
              {lab.sub}
            </p>
          </div>

          {/* Right: Cards */}
          <div className="space-y-4">
            {lab.cards.map((card, i) => (
              <div
                key={card.title}
                className="flex items-start gap-5 p-6 rounded-xl bg-white border border-gray-100 hover:border-[#122D4A]/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[#122D4A] flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-white">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-display text-base text-[#122D4A] font-semibold mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
