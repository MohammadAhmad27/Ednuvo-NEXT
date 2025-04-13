import { Suspense } from "react";
import ClientComponent from "./ClientComponent";

const page = () => {
  return (
    <Suspense fallback={<div className="pl-6 py-5 pr-12">Loading...</div>}>
      <div className="w-full h-full">
      <ClientComponent />
      </div>
    </Suspense>
  );
};

export default page;
