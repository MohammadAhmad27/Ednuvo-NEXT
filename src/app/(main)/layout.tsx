import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
