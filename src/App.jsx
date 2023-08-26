import {Routes, Route} from "react-router-dom"
import {useState} from "react"
import Posts from "./Pages/Posts.jsx"
import Profile from "./Pages/Profile.jsx"
import Login from "./Pages/Login.jsx"
import Register from "./Pages/Register.jsx"
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"



function App() {
  const[token, setToken]=useState(localStorage.getItem("token"));
  return (
      <div>
        <Navbar token={token} setToken={setToken}/>
        <Routes>
          <Route path='/' element={<Home token={token}/>}></Route>
          <Route path='/posts' element={<Posts token={token}/>}></Route>
          <Route path='/profile' element={<Profile token={token}/>}></Route>
          <Route path='/login' element={<Login setToken={setToken}/>}></Route>
          <Route path='/register' element={<Register setToken={setToken}/>}></Route>
        </Routes>
    
      </div>
        
  )
}

export default App