import { useState } from 'react';

export default function Posts(token) {
  const [posts, setPosts] = useState([]);
  console.log(posts)
  setPosts(posts)
  return (
    <div>
      <h1>Posts</h1>
    </div>
  )
}
//Get all posts
const fetchAllPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`)
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
    fetchAllPosts()
  }
}

//Create a newPost
const newPost = async () =>{
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: "Watermelon Slippers",
          description: "Green and red watermelon theme slippers with cross buckles in women size 8",
          price: "35.00",
          location: "New York, NY",
          willDeliver: true
        }
      })
    });
    const result = await response.json();
    console.log(newPost);
    return result
  } catch (err) {
    console.error(err);
  }
}

//Update a Post
const updatePost = async () => {
  try {
    // You will need to insert a variable into the fetch template literal 
    // in order to make the POST_ID dynamic. 
    // 5e8d1bd48829fb0017d2233b is just for demonstration.
    const response = await fetch(`${BASE_URL}/Post_id`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: "Watermelon Slippers",
          description: "Green and red watermelon theme slippers with cross buckles in women size.",
          price: "30.00",
          location: "New York, NY",
          willDeliver: true
        }
      })
    });
    const result = await response.json();
    console.log(updatePost);
    return result
  } catch (err) {
    console.error(err);
  }
}

//Delete a Post
const deletePost = async () => {
  try {
    const response = await fetch(`${BASE_URL}/Posts_id`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const result = await response.json();
    console.log(deletePost);
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
