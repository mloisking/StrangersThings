import { useState } from 'react';
import Authenticationform from '../components/AuthenticationForm';

export default function Register(setToken){
    //Sign up for an account with username and password
    const[username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    return(
        <div>
            <h1>
                Register
            </h1>
            <Authenticationform buttonText="Register"/>
            
        </div>
    )
}