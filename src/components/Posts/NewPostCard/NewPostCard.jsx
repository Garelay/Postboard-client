import React from 'react'
import styles from "./NewPostCard.module.css"
import logo from "../../../images/cross.svg"
import { useDispatch, useSelector } from 'react-redux'
import { toggleForm } from '../../../actions/form'
import { showPostForm } from '../../../actions/modal'

export default function NewPostCard() {
    const modal = useSelector(state => state.modal)
    const dispatch = useDispatch()
    return (
        <div className={styles.container}>
           <button className={styles.button, styles.add_btn} onClick={()=>dispatch(showPostForm())}>
               <img src={logo} alt="add post" />
           </button>
        </div>
    )
}
