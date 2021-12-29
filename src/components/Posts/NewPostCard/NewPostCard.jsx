import React from 'react'
import styles from "./NewPostCard.module.css"
import logo from "../../../images/cross.svg"
import { useDispatch} from 'react-redux'
import { showPostForm } from '../../../actions/modal'

export default function NewPostCard() {
    const dispatch = useDispatch()
    return (
        <div className={styles.container}>
           <button className={styles.button, styles.add_btn} onClick={()=>dispatch(showPostForm())}>
               <img src={logo} alt="add post" />
           </button>
        </div>
    )
}
