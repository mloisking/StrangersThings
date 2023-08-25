import {useState} from 'react';
export default function Createposts(){
    const {title, setTitle}=useState("")
    const {description, setDescription}=useState("")
    const {price, setPrice}=useState("")
    const {location, setLocation}=useState("")
    const {willDeliver, setWillDeliver}=useState("")

    return(
        <div>
            <h1>Create Posts</h1>
            <form>
                <label htmlFor="title">Title</label>
                <input
                type="text"
                id="title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}/>

                <label htmlFor="description">Description</label>
                <input
                type="text"
                id="description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}/>

               <label htmlFor="price">Price</label>
               <input
                type="text"
                id="price"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}/>

               <label htmlFor="location">Location</label>
               <input
                type="text"
                id="location"
                value={location}
                onChange={(e)=>setLocation(e.target.value)}/>

               <label htmlFor="willDeliver">WillDeliver</label>
               <input
                type="text"
                id="willDeliver"
                value={willDeliver}
                onChange={(e)=>setWillDeliver(e.target.value)}/> 
            </form>
        </div>
    )
}