import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FileBase from "react-file-base64"

import styles from "./PostForm.module.css"
import { createPost, updatePost} from '../../../actions/posts'
import {setCurrentId} from '../../../actions/currentId'
import { closeModal } from '../../../actions/modal'

export default function Form() {
    const user = useSelector(state => state.user)
    const [postData, setPostData] = useState({ creator: "", title: '', message: '', tags: '', selectedFile: '' })
    const currentId = useSelector(state=>state.currentId)
    const post = useSelector(state => (currentId ? state.posts.find((post) => post._id === currentId) : null))
    const dispatch = useDispatch()

    // if the form was opened to edit a post, set post data to be that post's data
    useEffect(()=>{
        if (post) setPostData (post)
    }, [post])

    const clear = () => {
        dispatch(setCurrentId(0))
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
      };

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (!currentId) {
            //can't use setState since it's async, can't set directly or through useEffect, since it throws a warning
            dispatch(createPost({...postData, creator:user.name}))
        }else{
            dispatch(updatePost(currentId,postData))
            }    
        clear()
        dispatch(closeModal())
    }
    return (
        <form className={styles.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
            <h2 className={styles.header}>
            {currentId ? `Editing "${post.title}"` : 'Creating a Post'}
            </h2>
            <button className={styles.button, styles.close_btn} type="button" onClick={()=>dispatch(closeModal())}>X</button>
            <div className={styles.container}>
                <label htmlFor="title" className="lable">Title:</label>
                <input type="text" id="title"className={styles.text_input} value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <label htmlFor="message"className="lable">Message:</label>
                <input type="text" id="message" className={styles.text_input} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                <label htmlFor="tags"className="lable">Tags (coma separated):</label>
                <input type="text" id="tags"className={styles.text_input} value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })}/>
            </div>
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
            <button className={styles.button, styles.submit_btn} type="submit">Submit</button>
            <button type="button" className={styles.button, styles.clear_btn} onClick={clear}>Clear</button>
        </form>
    )
}
