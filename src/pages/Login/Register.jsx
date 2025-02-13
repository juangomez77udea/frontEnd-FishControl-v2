import { useState } from "react"
import { RiMailLine, RiLockPasswordLine, RiEyeLine, RiEyeOffLine, RiUserLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")


  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([name, lastName, email, password, confirmPassword].includes("")) {
      toast.error("🤔 Todos los campos son obligatorios", { theme: "dark" })
      return
    }
    if (password.length < 6) {
      toast.error("⚠ El password debe contener al menos 6 caracteres", { theme: "dark" })
      return
    }
    if(password !== confirmPassword) {
      toast.error("Los password no coinciden", {theme: "dark"})
    }

    //Validar que el email no exista en base de datos

    //enviar email de verificacion

    console.log("Pasan las validaciones", { name, lastName, email, password })
  }

 

  return (
    <div className="bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat min-h-screen w-full fixed top-0 left-0 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg w-full md:w-[500px]">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">Registrarse</h1>
      </div>
      <form className="flex flex-col gap-4 mb-6" onSubmit={handleSubmit}>
        <div className="relative">
          <RiUserLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            className="border border-gray-200 outline-none py-2 px-8 rounded-lg w-full"
            placeholder="Nombres"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative">
          <RiUserLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            className="border border-gray-200 outline-none py-2 px-8 rounded-lg w-full"
            placeholder="Apellidos"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="relative">
          <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            className="border border-gray-200 outline-none py-2 px-8 rounded-lg w-full"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative">
          <RiLockPasswordLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            className="border border-gray-200 outline-none py-2 px-8 rounded-lg w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          )}
        </div>
        <div className="relative">
          <RiLockPasswordLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            className="border border-gray-200 outline-none py-2 px-8 rounded-lg w-full"
            placeholder="Confirmar Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          )}
        </div>
        <div>
        <button className=' bg-sky-300 text-gray-800 w-full py-2 px-6 rounded-4xl mt-6 hover:bg-green-300 transition-all'>
          Crear Cuenta
        </button>
      </div>
      </form>

      <div className=" flex text-center justify-between">
        <div>
          <span>¿Ya tienes una cuenta?{" "}</span>
          <Link
            to="/"
            className=" text-sky-600 font-medium hover:underline transition-all"
          >
            Ingresa
          </Link>
        </div>
        <div className=" text-right text-gray-500">
          <Link
            to="/forget-password"
            className=" text-gray-500 text-right font-medium hover:underline transition-all"
          >
            ¿Olvidaste tu password?
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register

