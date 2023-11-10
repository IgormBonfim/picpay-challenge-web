"use client";

import ButtonSpinner from "@/components/button-spiner";
import Logo from "@/components/logo";
import { AuthContext } from "@/app/contexts/AuthContext";
import { useContext, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

type FormAuth = {
  email: string;
  password: string;
};

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormAuth>({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { signIn } = useContext(AuthContext);

  const onSubmit: SubmitHandler<FormAuth> = (data: FormAuth) => {
    try {
      setLoading(true);
      setErrorMessage(null);
      signIn(data).catch((response) => {
        let message: string = response.response.data.message;
        console.log(message);
        setErrorMessage(message)
      }).finally(() => setLoading(false));

    } catch (error) {
      console.log("erro");
    }
  };

  const onError: SubmitErrorHandler<FormAuth> = (errors) => console.log(errors);

  return (
    <div className="flex flex-col items-center max-w-[90%] w-[500px]">
      <div className="m-6">
        <Logo/>
      </div>
      <form
        action=""
        method="post"
        onSubmit={handleSubmit(onSubmit, onError)}
        autoComplete="off"
        className="flex flex-col gap-7 w-full max-w-full"
      >
        <div className="flex flex-col gap-2">
          <input
            {...register("email")}
            placeholder="E-mail"
            className="appearance-none py-2 px-3 border rounded p-[10px] text-gray-700 bg-zinc-200 focus:outline-none focus:shadow-outline"
            type="text"
            name="email"
          />
          {errors?.email && (
            <span className="text-red-700">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input
            {...register("password")}
            placeholder="Password"
            className="appearance-none py-2 px-3 border rounded p-[10px] text-gray-700 bg-zinc-200 focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
          />
        </div>
        <button
          type="submit"
          className="w-full transition inline-flex items-center justify-center space-x-1.5 bg-green-600 hover:bg-green-700  disabled:bg-green-300 disabled:bg-opacity-75 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
          >          
          {loading && (
            <ButtonSpinner/>
            )}
          {!loading && (
            <span>Login</span>
            )}
        </button>
        {errorMessage && (<span className="text-red-600 text-center">{errorMessage}</span>)}
        <div className="flex items-center flex-col">
          <a
            href="/register"
            className="underline text-green-600 hover:text-green-700 cursor-pointer"
          >
            Create an account
          </a>
        </div>
      </form>
    </div>
  );
}
