import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full pl-4 bg-[#000000] min-h-screen">
        <Header />
        {children} {/* Render page content below Header */}
      </main>
    </div>
  );
}
