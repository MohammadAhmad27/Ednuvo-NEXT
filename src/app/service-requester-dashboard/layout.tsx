import Header from "@/shared/Header";
import Sidebar from "@/shared/Sidebar";
import { requesterMenuLinks } from "./content";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <div className="w-[250px]">
        <Sidebar menuLinks={requesterMenuLinks} type="requester" />
      </div>
      <div className="flex-1 h-full flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
