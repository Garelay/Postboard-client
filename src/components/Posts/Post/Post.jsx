import React from 'react'

import styles from "./styles.module.css"

export default function Post({post, setCurrentId}) {
    return (
        <div className={styles.container}>
            <button className={styles.button, styles.edit_btn}>Edit</button>
            <div>
                <img src={post.selectedFile|| 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            </div>
            <div>
                {post.title}
            </div>
            <div>
                {post.message}
            </div>
            <div>
                Creator: {post.creator}
            </div>
            <button className={styles.button, styles.delete_btn}>Delete</button>

            <button className={styles.button, styles.like_btn}>Like</button>
        </div>
    )
}
