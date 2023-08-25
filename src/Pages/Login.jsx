import Authenticationform from '../components/AuthenticationForm';

export default function Login(setToken){
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