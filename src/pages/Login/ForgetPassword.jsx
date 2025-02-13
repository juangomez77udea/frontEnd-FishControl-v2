import { useState } from "react"
import { RiMailLine } from "react-icons/ri"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

const ForgetPassword = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([email].includes("")) {
      toast.error("🥸 El email es obligatorio", { theme: "dark" })
      return;
    }

    //Verificar que el email exita en base de datos
    //Enviar email de recuperacion de contraseña
    console.log("Funcionalidad de de recuperar password")

  }

  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-96">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">Recuperar Contraseña</h1>
      </div>
      <form className="flex flex-col gap-4 mb-6" onSubmit={handleSubmit}>
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
        <div>
          <button className="bg-sky-300 text-gray-800 w-full py-2 px-6 rounded-4xl mt-6 hover:bg-green-300 transition-all">
            Enviar Instrucciones
          </button>
        </div>
      </form>
      <div className="flex flex-col sm:flex-row text-center justify-between gap-4">
        <div>
          <span>¿Ya tienes una cuenta?{" "}</span>
          <Link to="/" className="text-sky-600 font-medium hover:underline transition-all">
            Ingresa
          </Link>
        </div>
        <div className=" text-right">
        ¿No tienes una cuenta?{" "}
          <Link to="/register"
           className="text-sky-600 font-medium hover:underline transition-all">
             Regístrate
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword