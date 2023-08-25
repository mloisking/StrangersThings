import { NavLink as Link } from "react-router-dom";

export default function Navbar(){
    //To show different links if logged in or not
    //Implement logout functionality
    return(
        <nav>
            <ul>
            <li>
                <Link to ="/">Home</Link>
                </li>
                <li>
                <Link to ="/posts">Posts</Link>
                </li>
                <li>
                <Link to ="/profile">Profile</Link> 
                </li>
                <li>
                <Link to ="/login">Login</Link> 
                </li>
                <li>
                <Link to ="/register">Register</Link>   
                </li>
                
            </ul>
        </nav>
      
    )
}