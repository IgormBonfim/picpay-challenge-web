"use client"
import Logo from "@/app/components/logo";
import { LayoutDashboard, CreditCard } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname()

  const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/transactions', label: 'Transaction' },
  ]
  
  return (
    <aside className="max-w-64 p-4 bg-zinc-900 rounded-e-xl">
      <div className="flex flex-col items-center m-5">
        <Logo size="small"/>
      </div>
      <nav className="pt-5 border-t-2 border-zinc-800 space-y-3">
      <a href="/dashboard" className={`${pathname == "/dashboard" ? "text-green-500" : "text-zinc-600"}  hover:text-zinc-100 flex gap-1 items-center`}>
          <LayoutDashboard/>
          <span>Dashboard</span>
        </a>
        <a href="/dashboard/transactions" className={`${pathname == "/dashboard/transactions" ? "text-green-500" : "text-zinc-600"}  hover:text-zinc-100 flex gap-1 items-center`}>
          <CreditCard />
          <span>Trasactions</span>
        </a>
      </nav>

    </aside>
  );
}