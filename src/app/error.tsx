"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  return (
    <div className="min-h-screen w-screen flex flex-col gap-2 items-center justify-center text-center p-6">
      <h1 className="text-[36px] font-bold text-lightblack">
        Oops! Something went wrong.
      </h1>
      <p className="text-[18px] font-normal text-darkgray mb-2">
        {error?.message ||
          "An unexpected error occurred. Please try again later!"}
      </p>
      <button
        onClick={reset}
        className="bg-primary text-white rounded px-5 py-2 mb-2"
      >
        Try Again
      </button>
      <Link href="/" className="text-secondary hover:underline">
        Go back home
      </Link>
    </div>
  );
}
