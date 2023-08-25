import Authenticationform from '../components/AuthenticationForm';

export default function Login(setToken) {
  const login = async () => {
    setToken(result.token);
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: 'mking44',
            password: 'Snowcone24$'
          }
        })
      });
      const result = await response.json();
      console.log(login);
      return result
    } catch (err) {
      console.error(err);
    }
  }
    return(
        function handleSubmit(e){
            e.preventDefault();
            console.log("Login form submitted");
        
        <div>
            <h1>
            Login
            </h1>
            <Authenticationform buttonText="Login" handleSubmit={handleSumbit}/>

        </div>
        }
    )
}