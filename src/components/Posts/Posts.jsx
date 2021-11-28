import React from 'react'
import {useSelector} from "react-redux"

import styles from "./styles.module.css"
import Post from "./Post/Post"
import NewPostCard from './NewPostCard/NewPostCard'

export default function Posts({setCurrentId, toggleForm, showForm}) {
    const posts = useSelector((state)=> state.posts)
    return (
        <div className={styles.container}>  
        {!posts.length? <div>No post found</div> :   
            (posts.map((post)=> <Post post = {post} setCurrentId={setCurrentId} key={Post._id}/>))       
            }
        {!showForm?<NewPostCard toggleForm={toggleForm}/>:null}
    </div>
    )}
