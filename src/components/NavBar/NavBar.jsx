import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import AccountInfo from './AccountInfo/AccountInfo'
import logo from "../../images/logo.svg"
import styles from "./NavBar.module.css"
import { showLogInForm, showSignInForm } from '../../actions/modal'


export default function Header() {
    const dispatch = useDispatch()
    const loggedIn = false
    return (
        <div className={styles.header}>
            <div className={styles.container}>
            <h2>PostBoard</h2>
            <img src={logo} alt="logo" className={styles.logo}/>
            </div>
            {loggedIn?
            <div>
                <AccountInfo/>
                <button className={styles.button_}>Account Settings</button>
                <button className={styles.button}>Log out</button>
                </div>:
            <div>
                <button className={styles.button} onClick={()=>{dispatch(showLogInForm())}}>Log In</button>
                <button className={styles.button} onClick={()=>{dispatch(showSignInForm())}}> Sign Up</button>
            </div>
            }
        </div>
    )
}
