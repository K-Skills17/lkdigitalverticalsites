import { trust } from "@/config/site";

export default function TrustStrip() {
  return (
    <section className="bg-[#F8F9FA] border-y border-gray-200 py-10">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#64748B] font-medium text-center md:text-left">
            {trust.headline}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            {trust.pillars.map((pillar, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#DC6D25]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-[#DC6D25]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-[#0f172a] font-medium whitespace-nowrap">{pillar.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
