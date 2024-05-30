import './App.css'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword';
import ChangePassword from './components/ChangePassword';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {  
  return (
    <BrowserRouter>
    <Routes>      
        <Route path="/"  element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="change-password/:userId" element={<ChangePassword />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
