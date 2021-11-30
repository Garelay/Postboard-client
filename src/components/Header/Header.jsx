import React from 'react'

import logo from "../../images/logo.svg"
import styles from "./Header.module.css"

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
                <button>Log out</button></div>:
            <div>
                <button className={styles.login_btn}>Log In</button>
                <button className={styles.login_btn}> Sign in</button>
            </div>
            }
        </div>
    )
}
