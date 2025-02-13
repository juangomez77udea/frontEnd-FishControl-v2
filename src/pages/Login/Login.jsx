import { useState } from "react"
import { RiMailLine, RiLockPasswordLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../api"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!username || !password) {
      toast.error("🥸 Todos los campos son obligatorios", { theme: "dark" });
      return;
    }
  
    if (password.length < 6) {
      toast.error("El password debe contener al menos 6 caracteres", { theme: "dark" });
      return;
    }
  
    try {
      const response = await login(username, password); // ✅ Ahora response contiene { token, username }
  
      if (response && response.token) {
        localStorage.setItem("token", response.token);
        toast.success("Inicio de sesión exitoso", { theme: "dark" });
        navigate("/menu");
      } else {
        toast.error("Credenciales inválidas", { theme: "dark" });
      }
    } catch (error) {
      console.error("Error en login:", error);
      toast.error("Error en la autenticación", { theme: "dark" });
    }
  };
  


  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-96">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">Iniciar Sesión</h1>
      </div>
      <form className="flex flex-col gap-4 mb-6" onSubmit={handleSubmit}>
        <div className="relative">
          <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            className="border border-gray-200 outline-none py-2 px-8 rounded-lg w-full"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <div className="text-right">
          <Link
            className="text-gray-500 font-medium hover:text-sky-600 hover:underline transition-all"
            to="forget-password"
          >
            ¿Olvidaste tu password?
          </Link>
        </div>
        <div>
          <button className="bg-sky-600 text-white w-full py-2 px-6 rounded-lg mt-6 hover:scale-105 transition-all">
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        ¿No tienes un cuenta?{" "}
        <Link className="text-sky-600 font-medium hover:underline transition-all" to="register">
          Regístrate
        </Link>
      </div>
    </div>
  )
}

export default Login

