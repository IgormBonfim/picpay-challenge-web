import Register from "@/app/register/components/register";

export const metadata = {
  title: "Register",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Register />
    </main>
  );
}
