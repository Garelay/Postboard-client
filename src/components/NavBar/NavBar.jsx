import {React, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AccountInfo from './AccountInfo/AccountInfo'
import logo from "../../images/logo.svg"
import styles from "./NavBar.module.css"
import { showLogInForm, showSignInForm, showUserForm } from '../../actions/modal'
import { logOut, getUser} from '../../actions/user'



export default function Header() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    useEffect(() => {
        if (localStorage.getItem("refreshToken")&&localStorage.getItem("refreshToken")!=="undefined")
         {
            dispatch(getUser()) // get's user info from local storage           
         }
    }, [dispatch])
    return (
        <div className={styles.header}>
            <div className={styles.container}>
            <h2>PostBoard</h2>
            <img src={logo} alt="logo" className={styles.logo}/>
            </div>
            {user.id?
            <div>
                <AccountInfo/>
                <button className={styles.button} onClick={()=>{dispatch(showUserForm())}}>Account Settings</button>
                <button className={styles.button} onClick={()=>{dispatch(logOut())}}>Log out</button>
                </div>:
            <div>
                <button className={styles.button} onClick={()=>{dispatch(showLogInForm())}}>Log In</button>
                <button className={styles.button} onClick={()=>{dispatch(showSignInForm())}}> Sign Up</button>
            </div>
            }
        </div>
    )
}
