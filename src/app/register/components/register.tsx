import Logo from "@/app/components/logo";
import { GetServerSideProps } from "next";

export default function Register() {
  return (
    <div className="flex flex-col items-center max-w-[90%] w-[500px]">
      <Logo />
      <form
        action=""
        method="post"
        autoComplete="off"
        className="flex flex-col gap-7 w-full max-w-full"
      >
        <div className="flex flex-col gap-2">
          <input
            placeholder="E-mail"
            className="appearance-none py-2 px-3 border rounded p-[10px] text-gray-700 bg-zinc-200 focus:outline-none focus:shadow-outline"
            type="text"
            name="email"
          />
        </div>
        <div className="flex gap-3">
          <input
            placeholder="Full name"
            className="appearance-none py-2 px-3 border rounded p-[10px] text-gray-700 bg-zinc-200 focus:outline-none focus:shadow-outline"
            type="text"
            name="email"
          />
          <input
            placeholder="Document"
            className="appearance-none py-2 px-3 border rounded p-[10px] text-gray-700 bg-zinc-200 focus:outline-none focus:shadow-outline"
            type="text"
            name="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            placeholder="Password"
            className="appearance-none py-2 px-3 border rounded p-[10px] text-gray-700 bg-zinc-200 focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
        <div className="flex items-center flex-col">
          <a href="/auth" className="underline text-green-600 cursor-pointer">
            Have an account? Login
          </a>
        </div>
      </form>
    </div>
  );
}
