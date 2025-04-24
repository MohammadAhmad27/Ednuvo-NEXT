import { Suspense } from "react";
import AdminClientComponent from "./AdminClientComponent";

const page = () => {
  return (
    <Suspense fallback={<div className="px-5 py-6">Loading...</div>}>
      <div className="w-full h-full">
      <AdminClientComponent />
      </div>
    </Suspense>
  );
};

export default page;
