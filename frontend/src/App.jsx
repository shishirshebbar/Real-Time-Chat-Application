import Login from "./Pages/Login/Login"
import Home from "./Pages/Home/Home";
import './App.css'
import Signup from "./Pages/Signup/Signup";
import { Routes,Route, Navigate } from "react-router-dom";
import {Toaster} from "react-hot-toast";
import { useAuthContext } from "./context-api/AuthContext";

function App() {
  const {authorizeduser}=useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
    <Routes>
      <Route path ='/' element ={authorizeduser?<Home />:<Navigate to= {"/login"}/>}/>
      <Route path ='/login' element ={authorizeduser?<Navigate to="/"/>:<Login />}/>
      <Route path ='/signup' element ={authorizeduser?<Navigate to="/"/>:<Signup />}/>

    </Routes>
    <Toaster />
    </div>
  )
}

export default App;
