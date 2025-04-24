import { providerFaqData } from "@/app/service-provider-dashboard/content"
import Faq from "@/shared/Faq"

const ProviderFaqs = () => {
  return (
    <div className="w-full h-full space-y-5 bg-white rounded-2xl px-4 py-5">
      <h2 className="text-[18px] font-semibold text-[#2D2D2D]">Frequently Asked Questions</h2>
      <div>
        <Faq faqData={providerFaqData} />
      </div>
    </div>
  )
}

export default ProviderFaqs