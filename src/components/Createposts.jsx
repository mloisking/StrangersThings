import React, { useState } from 'react';
import { makePost, updatePost } from '../API';

export default function Createposts() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [willDeliver, setWillDeliver] = useState("")

    //make a post with handlesubmit
    const handleSubmit = async (e) => {
        e.preventDefault()
        let token = JSON.parse(localStorage.getItem("token"))
        const response = await makePost(token, title, description, price, willDeliver)
        const result = await response.json();
        console.log(result);
    }
    //Update a post with handleUpdate
    const handleUpdate = async (e) => {
        e.preventDefault()
        let token = JSON.parse(localStorage.getItem("token"))
        const response = await updatePost(token, title, description, price, willDeliver)
        const result = await response.json();
        console.log(result)
    }
    //return post data here
    return (
        <div>
            <h1>Create or Update Posts</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }} />

                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }} />

                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    id="price"
                    value={price}
                    onChange={(e) => { setPrice(e.target.value) }} />

                <label htmlFor="willDeliver">WillDeliver</label>
                <select name="willDeliver" id="willDeliver" onChange={(e) => { setWillDeliver(e.target.value) }}>
                    <option value="false">
                        false
                    </option>

                    <option value="true">
                        true
                    </option>
                </select>
                <button type="submit">Add Posts</button>
                <button type="submit">Update Post</button>
                </form>
                <form onSubmit={handleUpdate}>
            </form>
        </div>
    );
}
