import { useState } from 'react';
import { RiMailLine, RiLockPasswordLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'


const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password)

    if ([email, password].includes("")) {
      toast.error("🥸 Todos los campos son obligatorios", { theme: "dark" });
    }
    if (password.length < 6) {
      toast.error("El password debe contener al menos 6 caracteres", { theme: "dark" })
    } else {
      console.log("Pasan las validaciones")
    }


  }

  return (
    <div className=' bg-white p-8 rounded-lg w-full md:w-96'>
      <div className=' mb-10'>
        <h1 className=' text-3xl uppercase font-bold text-center'>Iniciar Sessión</h1>
      </div>
      <form className=' flex flex-col gap-4 mb-6' onSubmit={handleSubmit}>
        <div className=' relative'>
          < RiMailLine className=' absolute left-2 top-1/2 -translate-y-1/2 text-gray-500' />
          <input
            type='email'
            className=' border border-gray-200 outline-none py-2 px-8 rounded-lg w-full'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=' relative'>
          < RiLockPasswordLine className=' absolute left-2 top-1/2 -translate-y-1/2 text-gray-500' />
          <input
            type={showPassword ? "text" : "password"}
            className=' border border-gray-200 outline-none py-2 px-8 rounded-lg w-full'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <RiEyeOffLine onClick={handleShowPassword} className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer' />
          ) : (
            <RiEyeLine onClick={handleShowPassword} className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer' />
          )}

        </div>
        <div className=' text-right'>
          <Link className='  text-gray-500 font-medium hover:text-sky-600 hover:underline transition-all' to="forget-password">¿Olvidaste tu password?</Link>
        </div>
        <div>
          <button className=' bg-sky-600 text-white w-full py-2 px-6 rounded-lg mt-6 hover:scale-105 transition-all'>
            Login
          </button>
        </div>
      </form>
      <div className=' text-center'>
        ¿No tienes un cuenta? <Link className=' text-sky-600 font-medium hover:underline transition-all' to='register'>Regístrate</Link>
      </div>
    </div>
  )
}

export default Login