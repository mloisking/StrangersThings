
import Authenticationform from '../components/AuthenticationForm';


//Sign up for an account with username and password
export default function Register(setToken){
setToken(result.token)    
    const registerUser = async () => {
        try {
          const response = await fetch(
            `${BASE_URL}/users/register`, {
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
          console.log(registerUser)
          return result
        } catch (err) {
          console.error(err);
        }
      }

    return(
        <div>
            <h1>
                Register
            </h1>
            <Authenticationform buttonText="Register"/>
            
        </div>
    )
}