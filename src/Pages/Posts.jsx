import { useState } from 'react';
import { useEffect } from 'react';
import { fetchPosts } from '../API';
import Createposts from '../components/Createposts';


//Get all posts
export default function Posts(token) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchAllPosts = async () => {
      const response = await fetchPosts()
      setPosts(response.data.posts)
    }
    fetchAllPosts()
  }, []);
  return (
    <div>
      <h1>
        Posts
      </h1>
      <Createposts
      />
      {posts && posts.map((post) => {
        return (
          <div>
            <h3>
              {post.title}
            </h3>
            <p>
              {post.description}
            </p>
            <p>{post.price}</p>
            <p>{post.location}</p>
            <p>{post.willDeliver}</p>
          </div>
        )

      })}


    </div>
  )
}


