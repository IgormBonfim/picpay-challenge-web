"use client";
import { AuthContext } from "@/app/contexts/AuthContext";
import { Bell, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export default function Header() {
  const pathname = usePathname().split("/");
  let lastWord = pathname[pathname.length - 1];  

  return (
      <header>
        <div className="p-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold capitalize">
                {lastWord}
            </h2>
            <div className="flex items-center gap-2">
                <Name/>
                <button className="text-zinc-500 hover:text-zinc-300 rounded-full bg-zinc-800 p-2">
                    <Bell className="w-5 h-5"/>
                </button>
                <button className="hover:text-zinc-900 rounded-full bg-green-600 p-2">
                    <User className="w-5 h-5"/>
                </button>
            </div>  
        </div>
        <div className="border-t-2 border-zinc-900">
        </div>
      </header>
  );
}

function Name() {
  // const { user } = useContext(AuthContext);
  let user = undefined;
    return (
      <div className="md:block hidden">
        { user?.fullName ? (
          <span>{user?.fullName}</span>
        ) : (
          <span className="h-6 w-11/12 rounded-full bg-gray-700 text-gray-700 animate-pulse">Igor Meira Bonfim</span>
        ) }
      </div>               
  );
}