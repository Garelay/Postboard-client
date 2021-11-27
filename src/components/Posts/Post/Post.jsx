import React from 'react'

import styles from "./styles.module.css"

export default function Post({post, setCurrentId}) {
    return (
        <div className={styles.container}>
            <div>
                <img src={post.selectedFile} alt={post.title} />
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
        </div>
    )
}
