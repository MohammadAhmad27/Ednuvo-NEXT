import Navbar from "@/shared/Navbar";
import Hero from "@/components/Landing/Hero";
import PopularServices from "@/components/Landing/PopularServices";
import NeedSomething from "@/components/Landing/NeedSomething";
import Categories from "@/components/Landing/Categories";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularServices />
      <NeedSomething />
      <Categories />
    </>
  );
};
export default page;
