import Steps from "@/components/ServiceProvider-Onboarding/ProfileStepper"
import Onboarding from "@/shared/Onboarding"
const page = () => {
  return (
    <div className='w-full overflow-hidden'>
    <Onboarding component={<Steps />} />
    </div>
  )
}

export default page