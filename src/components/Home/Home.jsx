// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { FcGoogle } from "react-icons/fc";
import { singInGoogle } from "../../service/singInGoogle";
import { singInEmail } from "../../service/singInEmail";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [error, setError] = useState("");

  function loginInGoogle() {
    singInGoogle()
      .then((res) => {
        navigate("/wall");
        res;
      })
      .catch((error) => setError(error));
  }
  const loginIn = () => {
    singInEmail(email, pass)
      .then((res) => {
        navigate("/wall");
        res;
      })
      .catch((err) => {
        err;
        setError("Please review credential, or register.");
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    loginIn();
  }

  return (
    <main className="flex flex-col justify-center items-center -tracking-tighter md:container-lg md:grid grid-cols-2 w-screen">
      <div className="w-auto p-6 justify-items-center items-center md:flex md:items-center md:justify-center md:mt-32">
        <Logo />
      </div>
      <div className="container flex items-center flex-col justify-around w-10/12 md:mt-32 -sm:w-80 ">
        <p className="font-[Duru] text-xl mt-5 mb-5">Welcome</p>
        <button
          onClick={loginInGoogle}
          className="flex -sm:w-80 justify-center items-center w-full bg-gray-900 h-12 text-base border border-mahogany rounded-lg text-white -tracking-tighter shadow-xl mb-5"
        >
          <FcGoogle area-label="Icon Google" className="mr-2" /> Join with
          Google
        </button>
        <p className="text-lg -sm:w-80 text-center">Sing in to your account</p>
        <form className="flex flex-col justify-start w-full mb-1 -sm:w-80">
          <label className="w-full">
            <p className="-tracking-tighterv ml-1">Email</p>
            <input
              type="email"
              value={email || ""}
              placeholder="example@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 focus:text-center -tracking-tighter border w-full rounded-lg h-12 border-amber-800 shadow-md mb-5 placeholder:p-2"
            />
          </label>
          <label className="w-full">
            <p className="-tracking-tighter ml-1">Password</p>
            <input
              type="password"
              value={pass || ""}
              placeholder="******"
              onChange={(e) => setPass(e.target.value)}
              className="p-3 focus:text-center  indent-2 -tracking-tighter border w-full rounded-lg h-12 border-amber-800 shadow-md mb-5 placeholder:p-2"
            />
          </label>
          <label aria-label="message error" className="w-full">
            <p className=" tracking-tighter text-red-700 -mt-4">{error}</p>
          </label>
          <label className="w-full" aria-label="button sing in">
            <button
              onClick={handleSubmit}
              type="submit"
              className="flex justify-center items-center w-full bg-gray-700 h-12 text-white text-base border rounded-lg -tracking-tighter shadow-xl mt-5"
            >
              Sing In
            </button>
          </label>
        </form>
        <p className="mt-3 text-lg hover:cursor-pointer text-center -sm:w-80">
          Not a member?{" "}
          <a className="underline" href="/register">
            Register!
          </a>
        </p>
      </div>
    </main>
  );
}
