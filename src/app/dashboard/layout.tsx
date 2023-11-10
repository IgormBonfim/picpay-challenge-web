import { Metadata } from "next";
import Sidebar from "@/app/dashboard/components/sidebar/sidebar";
import Header from "@/app/dashboard/components/header";
import { redirect } from "next/navigation";
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your transactions dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  validateUser();

  return (
    <div className={`h-screen flex flex-col`}>
      <div className="flex flex-1">
        <div className="flex transform -translate-x-full md:translate-x-0 transition-transform duration-100 ease-in">
          <Sidebar />
        </div>
        <main className="flex-1 flex-grow flex flex-col -ml-60 md:ml-0 transition-all duration-150 ease-in">
          <Header/>
          <div className="p-6 flex-1">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export function validateUser() {
  const cookieStore = cookies();
  const token = cookieStore.get('picpaychallenge.token')

  if (!token) {
    redirect("/auth");
  }
}
