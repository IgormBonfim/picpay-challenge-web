"use client"
import { CreditCard, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationSection() {
    const pathname = usePathname()

    const links = [
      { href: '/dashboard', label: 'Dashboard' },
      { href: '/dashboard/transactions', label: 'Transaction' },
    ]

    return (
        <section className="flex-col p-4">
          <nav className="space-y-3">
            <Link href="/dashboard" className={`${pathname == "/dashboard" ? "text-green-500" : "text-zinc-600"}  hover:text-zinc-100 flex gap-1 items-center`}>
              <LayoutDashboard/>
              <span>Dashboard</span>
            </Link>
            <Link href="/dashboard/transactions" className={`${pathname == "/dashboard/transactions" ? "text-green-500" : "text-zinc-600"}  hover:text-zinc-100 flex gap-1 items-center`}>
              <CreditCard />
              <span>Trasactions</span>
            </Link>
          </nav>
        </section>
    );
  }