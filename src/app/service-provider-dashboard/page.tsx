import { Suspense } from "react";
import ProviderClientComponent from "./ProviderClientComponent";

const page = () => {
  return (
    <Suspense fallback={<div className="px-5 py-6">Loading...</div>}>
      <div className="w-full h-full">
      <ProviderClientComponent />
      </div>
    </Suspense>
  );
};

export default page;
