import React from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Register from './components/Register'
import ResetPassword from './components/ResetPassword';

function App() {

  return (
    <div className="">
     
       <Routes>
        <Route path="/" element={<Login/>} exact />
        <Route path="register" element={<Register/>} />
        <Route path='resetpassword' element={<ResetPassword/>}/>
       </Routes>
      
       
    </div>
  )
}

export default App
