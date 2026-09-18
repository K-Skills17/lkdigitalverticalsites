import { insights } from "@/config/site";

export default function Insights() {
  return (
    <section id="insights" className="py-20 md:py-28 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <h2 className="font-display text-display-lg text-[#0f172a]">
            {insights.h2}
          </h2>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#DC6D25] font-medium hover:gap-3 transition-all duration-200"
          >
            Ver todos os insights
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.categories.map((cat, i) => (
            <a
              key={cat.title}
              href={cat.href}
              className="group block p-8 rounded-2xl border border-gray-100 bg-[#F8F9FA] hover:border-[#122D4A]/20 hover:bg-white hover:shadow-lg hover:shadow-[#122D4A]/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-[#122D4A]/5 flex items-center justify-center mb-6 group-hover:bg-[#DC6D25]/10 transition-colors">
                <span className="text-xs font-bold text-[#122D4A] group-hover:text-[#DC6D25] transition-colors">0{i + 1}</span>
              </div>
              <h3 className="font-display text-xl text-[#122D4A] mb-3 font-semibold">
                {cat.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {cat.desc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs text-[#DC6D25] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Explorar
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
