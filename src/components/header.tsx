import Link from "next/link";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <Logo color={"text-green-600"}></Logo>
        </div>
        <div>
          <ul className="flex items-center gap-[4vw]">
            <li>
              <Link className="text-gray-950 hover:text-gray-500" href={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link className="text-gray-950 hover:text-gray-500" href={"/payment-methods"}>Payment Methods</Link>
            </li>
            <li>
              <Link className="text-gray-950 hover:text-gray-500" href={"/bank-statment"}>Bank statement</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <Link className="bg-green-600 hover:bg-green-700 border-2 border-green-600 hover:border-green-700 text-white px-4 py-2 rounded-full" href={"/auth"}>Sign in</Link>
          <Link className="bg-white hover:bg-green-600 border-2 border-green-600 text-green-600 hover:text-white px-4 py-2 rounded-full" href={"/register"}>Sign up</Link>
        </div>
      </nav>
    </header>
  );
}
