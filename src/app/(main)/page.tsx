import Hero from "@/components/Landing/Hero";
import PopularServices from "@/components/Landing/PopularServices";
import NeedSomething from "@/components/Landing/NeedSomething";
import Categories from "@/components/Landing/Categories";
import SkiledExperts from "@/components/Landing/SkiledExperts";

const page = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <PopularServices />
      <NeedSomething />
      <Categories />
      <SkiledExperts />
    </div>
  );
};
export default page;
