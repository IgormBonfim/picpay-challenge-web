import Login from "@/app/auth/components/login";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Login />
    </main>
  );
}
