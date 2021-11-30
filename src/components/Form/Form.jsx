import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FileBase from "react-file-base64"

import styles from "./Form.module.css"
import { createPost, updatePost} from '../../actions/posts'
import { closeForm } from '../../actions/form'
import {setCurrentId} from '../../actions/currentId'

export default function Form() {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
    const currentId = useSelector(state=>state.currentId)
    const post = useSelector(state => (currentId ? state.posts.find((message) => message._id === currentId) : null))
    const dispatch = useDispatch()

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
            dispatch(createPost(postData))
        }else{
                dispatch(updatePost(currentId,postData))
            }    
        clear()
        dispatch(closeForm())
    }
    return (
        <form className={styles.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
            <h2 className={styles.header}>
            {currentId ? `Editing "${post.title}"` : 'Creating a Post'}
            </h2>
            <button className={styles.button, styles.close_btn} onClick={()=>dispatch(closeForm())}>X</button>
            <div className={styles.container}>
                <label htmlFor="title" className="lable">Title:</label>
                <input type="text" id="title"className={styles.text_input} value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <label htmlFor="message"className="lable">Message:</label>
                <input type="text" id="message" className={styles.text_input} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                <label htmlFor="tags"className="lable">Tags (coma separated):</label>
                <input type="text" id="tags"className={styles.text_input} value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })}/>
                <label htmlFor="creator" className="lable">Creator:</label>
                <input type="text" id="creator"className={styles.text_input} value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
            </div>
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
            <button className={styles.button, styles.submit_btn} type="submit">Submit</button>
            <button className={styles.button, styles.clear_btn} onClick={clear}>Clear</button>
        </form>
    )
}
