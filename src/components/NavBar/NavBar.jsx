import React, {useState} from 'react'

import AccountInfo from './AccountInfo/AccountInfo'
import logo from "../../images/logo.svg"
import styles from "./NavBar.module.css"


export default function Header() {
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
                <button className={styles.button}>Log In</button>
                <button className={styles.button}> Sign in</button>
            </div>
            }
        </div>
    )
}
