import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full pl-4 bg-[#000000] min-h-screen">
        {children}
      </main>
    </div>
  );
}
