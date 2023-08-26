import { NavLink as Link } from "react-router-dom";

//Create a navigation bar
export default function Navbar(){
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