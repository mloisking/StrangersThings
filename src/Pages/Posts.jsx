import {useState} from 'react';

export default function Posts(token){
    //See a list of all posts
    //Create a new posts
    const [posts, setPosts]=useState([]);
    return(
        <div>
            <h1>Posts</h1>
        </div>
    )
}