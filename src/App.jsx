import { Route, Routes } from 'react-router-dom'
//Layout
import AuthLayout from './layouts/auth/AuthLayouth'
import Login from './pages/Login'
//Pages

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<AuthLayout />}>
      <Route index element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
