import {CLOSEMODAL, SHOWPOSTFORM, SHOWLOGINFORM, SHOWSIGNINFORM, SHOWUSERFOM} from "../constants/constants.js"
export function showPostForm() {
    return {type: SHOWPOSTFORM}
}
export function showLogInForm() {
    return {type: SHOWLOGINFORM}
}
export function showSignInForm() {
    return {type: SHOWSIGNINFORM}
}
export function showUserForm() {
    return {type: SHOWUSERFOM}
}


export function closeModal() {
    return {type: CLOSEMODAL}}
