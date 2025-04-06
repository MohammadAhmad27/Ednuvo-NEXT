import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-screen flex flex-col gap-2 items-center justify-center text-center p-6">
      <h1 className="text-[36px] font-bold text-lightblack leading-tight">
        404 - Page Not Found
      </h1>
      <p className="text-[18px] font-normal text-darkgray">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/" className="text-secondary hover:underline">
        Go back home
      </Link>
    </div>
  );
}
