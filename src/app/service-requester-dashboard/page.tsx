import { Suspense } from "react";
import RequesterClientComponent from "./RequesterClientComponent";

const page = () => {
  return (
    <Suspense fallback={<div className="px-5 py-6">Loading...</div>}>
      <div className="w-full h-full">
      <RequesterClientComponent />
      </div>
    </Suspense>
  );
};

export default page;
