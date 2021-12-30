import React, {useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {MdOutlineEditNote} from 'react-icons/md'
import {TiDeleteOutline} from "react-icons/ti";
import {BiLike} from "react-icons/bi"
import { likePost,deletePost } from '../../../actions/posts'
import { setCurrentId } from '../../../actions/currentId'
import styles from "./Post.module.css"
import { showPostForm } from '../../../actions/modal';

export default function Post({post}) {
    const dispatch = useDispatch()
    const posts = useSelector(state=> state.posts)
    const user = useSelector(state => state.user)
    const likeTimeOut = useRef()

    const handleEditClick = () => {
        dispatch(setCurrentId(post._id))
        dispatch(showPostForm())
    }

    const handleDebounceLike = () =>{
        clearTimeout(likeTimeOut.current)
        likeTimeOut.current = setTimeout (()=>{
            dispatch(likePost(post._id))
        }, 500)
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
            {(post.creator===user.name)?<button className={`${styles.button} ${styles.edit_btn}`} onClick={handleEditClick}><MdOutlineEditNote style={iconStyle}/></button>:null}           
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
            {(post.creator===user.name)?<button className={`${styles.button} ${styles.delete_btn}`} onClick={()=>dispatch(deletePost(post._id))}><TiDeleteOutline style={iconStyle}/></button>:null}
            <button className={`${styles.button} ${styles.like_btn}`} onClick={handleDebounceLike}><BiLike style={iconStyle}/> {post.likeCount}</button>
        </div>
    )
}
