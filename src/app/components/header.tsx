import Link from "next/link";
import Logo from "@/app/components/logo";

export default function Header() {
    return (
        <header className="fixed w-full h-20 flex items-center bg-green-600">
            <nav className="w-full flex items-center px-6 justify-between m-auto max-w-screen-x1">
                <Link href="/"><Logo/></Link>
                <ul className="flex items-center gap-10">
                    <li> <Link href="/">Inicio</Link></li>
                    <li> <Link href="/auth">Login</Link></li>
                    <li> <Link href="/dashboard">Dashboard</Link></li>
                    <li> <button>Sair</button></li>
                </ul>
            </nav>
        </header>
    );
}