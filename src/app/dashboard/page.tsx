import Logo from "@/app/components/logo";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Logo/>
      <Link href="/">Dashboard</Link>
    </main>
  );
}
