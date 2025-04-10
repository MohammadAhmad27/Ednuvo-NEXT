import ServiceRequesterSteps from "@/components/ServiceRequester-Onboarding/ServiceRequesterStepper"
import Onboarding from "@/shared/Onboarding"

const page = () => {
  return (
    <div className='w-full overflow-hidden'>
    <Onboarding component={<ServiceRequesterSteps />} />
    </div>
  )
}

export default page