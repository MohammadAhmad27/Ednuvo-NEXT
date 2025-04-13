import Header from "@/shared/Header";
import Sidebar from "@/shared/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex overflow-hidden">
      <div className="w-[250px]">
      <Sidebar />
      </div>
      <div className="flex-1 overflow-hidden">
      <Header />
      {children}
      </div>
    </div>
  );
}
