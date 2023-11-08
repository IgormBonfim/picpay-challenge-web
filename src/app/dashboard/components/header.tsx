"use client";
import Menu, { MenuButton, MenuItem, MenuItems } from "@ui/menu";
import { AuthContext } from "@/app/contexts/AuthContext";
import { Bell, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ButtonOrLink } from "@ui/ButtonOrLink";

export default function Header() {
  const { signOut } = useContext(AuthContext);
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

                <Menu>
                  <MenuButton className="hover:text-zinc-900 rounded-full bg-green-600 p-2">
                    <User className="w-5 h-5"/>
                  </MenuButton>
                  <MenuItems>
                    <MenuItem activeClass="bg-gray-700">
                      <ButtonOrLink>My account</ButtonOrLink>
                    </MenuItem>
                    <MenuItem activeClass="bg-gray-700">
                      <ButtonOrLink onClick={signOut}>Logout</ButtonOrLink>
                    </MenuItem>
                  </MenuItems>
                </Menu>
                
            </div>  
        </div>
        <div className="border-t-2 border-zinc-900"></div>
      </header>
  );
}

function Name() {
  const { user } = useContext(AuthContext);

  return (
      <div className="md:block hidden">
        { user?.fullName ? (
          <span>{user?.fullName}</span>
        ) : (
          <div role="status" className="max-w-sm animate-pulse">
            <div className="h-6 bg-gray-700 rounded-full w-48"></div>
          </div>
 
        ) }
      </div>               
  );
}