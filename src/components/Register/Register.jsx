import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { FcGoogle } from "react-icons/fc";
import { singInGoogle } from "../../service/singInGoogle";
import { addAcount } from "../../service/createAuth";
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [error, setError] = useState('');

  function loginInGoogle() {
    singInGoogle();
  }
  const createUser = () => { 
    addAcount(email, pass)
    .then((res) => {
      navigate('/wall');
      res
    })
    .catch((error) => {
        if(error.code === 'auth/weak-password'){
            setError('Password is to weak')
        }else if(error.code === 'auth/email-already-in-use'){
            setError('User is already exist. Please go login')
        }else if(error.code === 'auth/invalid-email'){
            setError('Invalid email')
        }
    })
  }
  function handleSubmit(e){
    e.preventDefault();
    createUser();
  }

  return (
    <main className="flex flex-col justify-center items-center -tracking-tighter md: container-lg md:grid grid-cols-2 -sm:w-full">
      <div className="w-auto p-6 justify-items-center items-center md:flex md:items-center md:justify-center md:mt-32">
        <Logo />
      </div>
      <div className="container flex items-center flex-col justify-around w-10/12 md:mt-32 -sm:w-full">
        <p className="font-[Duru] text-xl mt-5 mb-5">Register</p>
        <button
          onClick={loginInGoogle}
          className="flex -sm:w-80 justify-center items-center w-full bg-gray-900 h-12 text-base border border-mahogany rounded-lg text-white -tracking-tighter shadow-xl mb-5"
        >
          <FcGoogle area-label="Icon Google" className="mr-2" /> Join with
          Google
        </button>
        <p className="text-lg">Created your account</p>
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
              className="p-3 focus:text-center -tracking-tighter border w-full rounded-lg h-12 border-amber-800 shadow-md mb-5 placeholder:p-2"
            />
          </label>
          <label aria-label="message error" className="w-full">
            <p className=" tracking-tighter text-red-900 -mt-4">{error}</p>
          </label>
          <label className="w-full" aria-label="button sing in">
            <button onClick={handleSubmit}
            type="submit"
            className="flex justify-center items-center w-full bg-gray-700 h-12 text-white text-base border rounded-lg -tracking-tighter shadow-xl mt-5">
              Sing In
            </button>
          </label>
        </form>
        <p className="mt-3 text-lg hover:cursor-pointer text-center -sm:w-96">Are you member? <a className="underline" href="/">Go to login</a></p>
      </div>
    </main>
  );
}