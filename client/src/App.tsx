import type { FC } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Detail from "./pages/detail"
import Login from "./pages/login"
import Register from "./pages/register"
import Dashboard from "./pages/dashboard"
import Protected from "./components/protected"

const App : FC= () => {
  return (
    <BrowserRouter>
  
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Protected />}>
        <Route path="/" element={<Home />} /> 
        <Route path="/shoe/:id" element={<Detail />} />  

        </Route>

 <Route element={<Protected allowedRoles={["admin"]} />}>
        <Route path="/dashboard" element={<Dashboard />} />
      
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App