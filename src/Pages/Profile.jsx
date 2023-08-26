import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile(setToken) {
  const [username, setUsername] = useState("")
  const [message, setMessages] = useState("")
  const navigate=useNavigate()
  const  handleSubmit= async (e) => {
    setToken(response.data.token)
    e.preventDefault()
    localStorage.setItem("token", JSON.stringify(response.data.token))
    navigate("/login")
  }

  return (
    <div>
      <h1>
        Profile
      </h1>
      <form onSubmit={(e) => handleSubmit(e, username, message)}>
        <label htmlFor='username'>Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessages(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
  }

  