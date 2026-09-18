import { insights } from "@/config/site";

export default function Insights() {
  return (
    <section id="insights" className="py-20 md:py-28 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <h2 className="font-display text-display-lg text-[#0f172a]">
            {insights.h2}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.categories.map((cat, i) => (
            <div
              key={cat.title}
              className="p-8 rounded-2xl border border-gray-100 bg-[#F8F9FA]"
            >
              <div className="w-8 h-8 rounded-lg bg-[#122D4A]/5 flex items-center justify-center mb-6">
                <span className="text-xs font-bold text-[#122D4A]">0{i + 1}</span>
              </div>
              <h3 className="font-display text-xl text-[#122D4A] mb-3 font-semibold">
                {cat.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
