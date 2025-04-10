import ServiceProviderSteps from "@/components/ServiceProvider-Onboarding/ServiceProviderStepper"
import Onboarding from "@/shared/Onboarding"
const page = () => {
  return (
    <div className='w-full overflow-hidden'>
    <Onboarding component={<ServiceProviderSteps />} />
    </div>
  )
}

export default page