import { Suspense } from "react";
import ClientComponent from "./ClientComponent";

const page = () => {
  return (
    <Suspense fallback={<div className="pl-5 py-5 pr-12">Loading...</div>}>
      <ClientComponent />
    </Suspense>
  );
};

export default page;
