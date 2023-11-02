import Login from "@/app/auth/components/login";

export const metadata = {
    title: "Login"
}

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
        <Login/>
      </main>
    );
  }
  