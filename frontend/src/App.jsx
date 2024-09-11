import Login from "./Pages/Login/Login"
import Home from "./Pages/Home/Home";
import './App.css'
import Signup from "./Pages/Signup/Signup";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
    <Routes>
      <Route path ='/' element ={<Home />}/>
      <Route path ='/login' element ={<Login />}/>
      <Route path ='/signup' element ={<Signup />}/>

    </Routes>
    </div>
  )
}

export default App;
