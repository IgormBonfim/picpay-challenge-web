export default function Login() {
  return (
    <div className="flex flex-col items-center max-w-[90%] w-[500px]">
      <h2 className="m-6 font-extrabold text-3xl">PicPayChallenge</h2>
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
        <div className="flex flex-col gap-2">
          <input
            placeholder="Password"
            className="appearance-none py-2 px-3 border rounded p-[10px] text-gray-700 bg-zinc-200 focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
          />
        </div>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </button>
        <div className="flex items-center flex-col">
          <p className="underline text-green-600 cursor-pointer">Create an account</p>
        </div>
      </form>
    </div>
  );
}
