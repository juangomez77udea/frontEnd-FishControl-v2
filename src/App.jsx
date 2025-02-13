import { Route, Routes } from 'react-router-dom';
import AuthLayout from './layouts/auth/AuthLayouth';
import MenuLayout from './layouts/auth/MenuLayout';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import ForgetPassword from './pages/Login/ForgetPassword';
import ChangePassword from './pages/Login/ChangePassword';
import ListadoInsumos from './pages/insumos/ListadoInsumos';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Routes>
      {/* Rutas de autenticación */}
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="change-password/:token" element={<ChangePassword />} />
      </Route>

      {/* Ruta protegida para el menú */}
      <Route path="/menu" element={
        <PrivateRoute>
          <MenuLayout />
        </PrivateRoute>
      }>
        <Route index element={<ListadoInsumos />} /> {/* Carga ListadoInsumos automáticamente */}
      </Route>
    </Routes>
  );
}

export default App;
