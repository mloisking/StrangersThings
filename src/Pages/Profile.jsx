
export default function Profile(token) {
  const [username, setUsername] = useState("")
  const [messages, setMessages] = useState("")

  const myData = async () => {

    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      console.log(myData);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  const postMessage = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts/POST_ID/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          message: {
            content: "Do you still have this?  Would you take $10 less?"
          }
        })
      });
      const result = await response.json();
      console.log(postMessage);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>
        Profile
      </h1>
      <form onSubmit={(e) => handleSubmit(e, username, messages)}>
        <label htmlFor='username'>Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor='messages'>setMessages</label>
        <input
          type="text"
          id="messages"
          value={message}
          onChange={(e) => setMessages(e.target.value)} />
        <button type="submit">{buttonText}</button>
      </form>

    </div>
  )
}
