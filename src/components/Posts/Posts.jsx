import React from 'react'
import {useSelector, useDispatch} from "react-redux"

import styles from "./Posts.module.css"
import Post from "./Post/Post"
import NewPostCard from './NewPostCard/NewPostCard'

export default function Posts({setCurrentId}) {
    const modal = useSelector(state => state.modal)
    const posts = useSelector((state)=> state.posts)
    const showFormState = useSelector((state)=>state.form)
    return (
        <div className={styles.container}>  
         {!posts.length? <div>No post found</div> :   
            (posts.map((post)=> <Post post = {post} setCurrentId={setCurrentId} key={post._id}/>))       
            } 
        {(modal!=="postForm")?<NewPostCard/>:null}
    </div>
    )}
