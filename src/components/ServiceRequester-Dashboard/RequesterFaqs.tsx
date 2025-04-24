import { requesterFaqData } from "@/app/service-requester-dashboard/content"
import Faq from "@/shared/Faq"

const RequesterFaqs = () => {
  return (
    <div className="w-full h-full space-y-5 bg-white rounded-2xl px-4 py-5">
      <h2 className="text-[18px] font-semibold text-[#2D2D2D]">Frequently Asked Questions</h2>
      <div>
        <Faq faqData={requesterFaqData} />
      </div>
    </div>
  )
}

export default RequesterFaqs