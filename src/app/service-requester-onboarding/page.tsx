import Steps from "@/components/ServiceRequester-Onboarding/Steps"
import Onboarding from "@/shared/Onboarding"

const page = () => {
  return (
    <div className='w-full overflow-hidden'>
    <Onboarding component={<Steps />} />
    </div>
  )
}

export default page