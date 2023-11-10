"use client"
import { AuthContext } from "@/app/contexts/AuthContext";
import { ButtonOrLink } from "@ui/buttonOrLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export default function UserSection() {
    const { signOut } = useContext(AuthContext);
    const pathname = usePathname()
  
    const links = [
      { href: '/dashboard/my-account', label: 'Transaction' },
    ]
    
    return (
        <section className="border-t-2 border-zinc-800 p-4">
        <nav className="space-y-3">
          <Link href="/dashboard/my-account" className={`${pathname == "/my-account" ? "text-green-500" : "text-zinc-600"}  hover:text-zinc-100 flex gap-1 justify-center items-center`}>
            <span>My Account</span>
          </Link>
          <ButtonOrLink onClick={signOut} className="w-full text-zinc-600 hover:text-zinc-100 flex gap-1 justify-center items-center">
            Logout
          </ButtonOrLink>
        </nav>
      </section>
    );
  }