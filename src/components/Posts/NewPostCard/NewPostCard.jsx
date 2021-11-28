import React from 'react'
import styles from "./styles.module.css"
import logo from "../../../images/cross.svg"
export default function NewPostCard({toggleForm}) {
    return (
        <div className={styles.container}>
           <button className={styles.button, styles.add_btn} onClick={toggleForm}>
               <img src={logo} alt="add post" />
           </button>
        </div>
    )
}
