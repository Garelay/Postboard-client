import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./UserForm.module.css"
import FileBase from "react-file-base64"
import { changeAvatar } from '../../../actions/user'
import { closeModal } from '../../../actions/modal'
export default function UserForm() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const [img, setImg] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(changeAvatar(user.id,img))
        dispatch(closeModal())
    }
    return (
        <form onSubmit={handleSubmit}>
            <FileBase type="file" multiple={false} onDone={({ base64 })=> setImg(base64)}/>
            <button type="submit"> SUBMIT</button>
        </form>
    )
}
