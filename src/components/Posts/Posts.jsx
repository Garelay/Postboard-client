import React from 'react'
import {useSelector} from "react-redux"

import styles from "./styles.module.css"
import Post from "./Post/Post"
import NewPostCard from './NewPostCard/NewPostCard'

export default function Posts({setCurrentId}) {
    const posts = useSelector((state)=> state.posts)
    return (
        !posts.length? <div>No post found</div> :
        <div className={styles.container}>           
            {posts.map((post)=> <Post post = {post} setCurrentId={setCurrentId} key={Post._id}/>)}
            
            <NewPostCard/>
        </div>
    )
}
