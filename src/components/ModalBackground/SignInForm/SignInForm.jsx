import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import { closeModal, showLogInForm } from '../../../actions/modal'
import styles from "./SignInForm.module.css"

export default function SignInForm() {
    const [userData, setUserData] = useState({ name: '', email: '', password: ''})
    const dispatch = useDispatch()
    return (
        <form className={styles.form}>
            <button className={styles.close_btn} type="button" onClick={()=>dispatch(closeModal())}>X</button>
            <h2>Sign Up</h2>
            <div className={styles.container}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name"className={styles.text_input} value={userData.name} onChange={e=>setUserData({...userData, name: e.target.value})}/>
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email"className={styles.text_input} value={userData.email} onChange={e=>setUserData({...userData, email: e.target.value})}/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password"className={styles.text_input} value={userData.password} onChange={e=>setUserData({...userData, password: e.target.value})}/>
            </div>
            <button className={styles.submit_btn} type="submit">Submit</button>
            <p>
                Already have an account?
            </p>
            <button type="button" onClick={()=>dispatch(showLogInForm())}>Go to log in</button>
        </form>
    )
}
