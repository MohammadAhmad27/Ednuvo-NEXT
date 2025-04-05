import Hero from "@/components/Landing/Hero";
import PopularServices from "@/components/Landing/PopularServices";
import Navbar from "@/shared/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularServices />
    </>
  );
};
export default page;
