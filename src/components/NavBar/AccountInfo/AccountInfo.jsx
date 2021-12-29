import React from 'react'
import { useSelector } from 'react-redux'
import defaultUserImage from '../../../images/defaultUserImage.png'

export default function AccountInfo() {
    const user = useSelector(state => state.user)
    const userImg = (user.avatar==="default")?defaultUserImage:user.avatar
    return (
        <div>
            <img src={userImg} alt="userImg" />
            <h1>{user.name}</h1>
        </div>
    )
}
