"use client";

import Logo from "@/app/components/logo";
import axios from "axios";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

const postLogin = async (request: FormAuth) => {
  const response = await axios.post("http://localhost:5081/api/users/auth", request);

  console.log(response);
}

type FormAuth = {
  email: string;
  password: string;
};

export default function Login() {
  const { handleSubmit, register, formState: { errors } } = useForm<FormAuth>({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit: SubmitHandler<FormAuth> = (data: FormAuth) => postLogin(data);

  const onError: SubmitErrorHandler<FormAuth> = (errors) => console.log(errors);

  return (
    <div className="flex flex-col items-center max-w-[90%] w-[500px]">
      <Logo/>
      <form
        action=""
        method="post"
        onSubmit={handleSubmit(onSubmit, onError)}
        autoComplete="off"
        className="flex flex-col gap-7 w-full max-w-full"
      >
        <div className="flex flex-col gap-2">
          <input
            {...register("email", { required: "Email is required", minLength: {
              value: 8,
              message: "Email precisa ter no minimo 10 caracteres"
            } })}
            placeholder="E-mail"
            className="appearance-none py-2 px-3 border rounded p-[10px] text-gray-700 bg-zinc-200 focus:outline-none focus:shadow-outline"
            type="text"
            name="email"
          />
          {errors?.email && <span className="text-red-700">{errors.email.message}</span>}
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
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
        <div className="flex items-center flex-col">
          <a href="/register" className="underline text-green-600 cursor-pointer">
            Create an account
          </a>
        </div>
      </form>
    </div>
  );
}
