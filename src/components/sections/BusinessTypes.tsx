import { businessTypes } from "@/config/site";

export default function BusinessTypes() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F9FA]">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-display-lg text-[#0f172a] text-balance max-w-2xl mx-auto">
            {businessTypes.h2}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {businessTypes.categories.map((cat, i) => (
            <div
              key={cat.title}
              className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#122D4A]/20 hover:shadow-xl hover:shadow-[#122D4A]/5 transition-all duration-300 flex flex-col"
            >
              {/* Number accent */}
              <div className="w-8 h-8 rounded-full bg-[#DC6D25]/10 flex items-center justify-center mb-6">
                <span className="text-[11px] font-bold text-[#DC6D25]">0{i + 1}</span>
              </div>

              <h3 className="font-display text-xl text-[#122D4A] mb-4 font-semibold">
                {cat.title}
              </h3>

              <ul className="space-y-2 flex-1 mb-8">
                {cat.examples.map((example) => (
                  <li key={example} className="flex items-center gap-2 text-sm text-[#64748B]">
                    <span className="w-1 h-1 rounded-full bg-[#DC6D25]/50 flex-shrink-0" />
                    {example}
                  </li>
                ))}
              </ul>

              <a
                href={cat.href}
                className="inline-flex items-center gap-2 text-sm text-[#DC6D25] font-medium group-hover:gap-3 transition-all duration-200"
              >
                {cat.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
