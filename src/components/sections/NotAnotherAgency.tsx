import { notAnotherAgency } from "@/config/site";

export default function NotAnotherAgency() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-narrow mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-display-lg text-[#0f172a] mb-4">
            {notAnotherAgency.h2}
          </h2>
          <p className="text-base md:text-lg text-[#64748B] max-w-xl mx-auto">
            {notAnotherAgency.sub}
          </p>
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-2">
            <div className="px-6 py-4 bg-[#F8F9FA] border-b border-r border-gray-100">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#64748B]">Agência Tradicional</p>
            </div>
            <div className="px-6 py-4 bg-[#122D4A] border-b border-gray-100">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#DC6D25]">LK Digital</p>
            </div>
          </div>

          {/* Rows */}
          {notAnotherAgency.rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 ${i < notAnotherAgency.rows.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              <div className="px-6 py-5 border-r border-gray-100 flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-sm text-[#64748B]">{row.agency}</span>
              </div>
              <div className="px-6 py-5 bg-[#122D4A]/[0.03] flex items-center gap-3">
                <svg className="w-4 h-4 text-[#DC6D25] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[#122D4A] font-medium">{row.lk}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
