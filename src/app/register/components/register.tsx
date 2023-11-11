"use client"
import Logo from "@/components/logo";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";

type FormRegister = {
  email: string;
  fullName: string;
  document: string;
  password: string;
  userType: number;
};

export default function Register() {

  const onSubmit: SubmitHandler<FormRegister> = (data: FormRegister) => {
    
  };

  const onError: SubmitErrorHandler<FormRegister> = (errors) => console.log(errors);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormRegister>({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex flex-col items-center max-w-[90%] w-[500px]">
      <div className="m-6">
        <Logo/>
      </div>
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
          <IMaskInput
            {...register("document")}
            mask="000.000.000-00"
            className="appearance-none py-2 px-3 border rounded p-[10px] text-gray-700 bg-zinc-200 focus:outline-none focus:shadow-outline"
            placeholder="Document"
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
          <a href="/auth" className="underline text-green-600 hover:text-green-700 cursor-pointer">
            Have an account? Login
          </a>
        </div>
      </form>
    </div>
  );
}
