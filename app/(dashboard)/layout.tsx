import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Header from "@/components/shared/Header";
import CustomSidebar from "@/components/shared/CustomSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <CustomSidebar />
      <main className="w-full flex">
        <Header />
        <div className="w-full px-4">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
