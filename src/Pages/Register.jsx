
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../API';
import Authenticationform from '../components/AuthenticationForm';


//Sign up for an account with username and password
export default function Register({setToken}) {
  const navigate=useNavigate()
  const  handleSubmit= async (e, username, password) => {
    e.preventDefault()
    let response=await registerUser(username, password)
    setToken(response.data.token)
    localStorage.setItem("token", JSON.stringify(response.data.token))
    navigate("/login")
  }

  return (
    <div>
      <h1>
        Register
      </h1>
      <Authenticationform buttonText="Register" handleSubmit={handleSubmit} />

    </div>
  )
}