import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {MdOutlineEditNote} from 'react-icons/md'
import {TiDeleteOutline} from "react-icons/ti";
import {BiLike} from "react-icons/bi"
import { likePost,deletePost } from '../../../actions/posts'
import { setCurrentId } from '../../../actions/currentId'
import { toggleForm } from '../../../actions/form'
import styles from "./Post.module.css"

export default function Post({post}) {
    const dispatch = useDispatch()
    const posts = useSelector(state=> state.posts)
    const handleEditClick = () => {
        dispatch(setCurrentId(post._id))
        dispatch(toggleForm())
    }
    const iconStyle = {
        verticalAlign: "middle",
        height: "1em",
        width: "1em",
        marginBottom: "2px",
    }
    return (
        <div className={styles.container}>          
            <div>
                <img src={post.selectedFile|| 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            </div>
            <button className={`${styles.button} ${styles.edit_btn}`} onClick={handleEditClick}><MdOutlineEditNote style={iconStyle}/></button>
            <div>
                {post.title}
            </div>
            <div>
                {post.message}
            </div>
            <div>
                Creator: {post.creator}
            </div>
            <div>
                tags: {post.tags.map((tag) => `#${tag}`)}
            </div>
            <button className={`${styles.button} ${styles.delete_btn}`} onClick={()=>{dispatch(deletePost(post._id))
            console.log(posts.length)}}><TiDeleteOutline style={iconStyle}/></button>
            <button className={`${styles.button} ${styles.like_btn}`} onClick={() => dispatch(likePost(post._id))}><BiLike style={iconStyle}/> {post.likeCount}</button>
        </div>
    )
}
