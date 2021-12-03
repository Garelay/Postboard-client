import {CLOSEMODAL, SHOWPOSTFORM, SHOWLOGINFORM, SHOWSIGNINFORM, SHOWUSERFOM} from "../constants/constants.js"

export default function formReducer( modal = "none", action) { 
    switch (action.type){
        case SHOWPOSTFORM:{
            // modal = "postForm"
            return "postForm"
        }
        case SHOWLOGINFORM:{
            // modal = "logInForm"
            return "logInForm"
        }
        case SHOWSIGNINFORM:{
            // modal = "signInForm"
            return "signInForm"
        }
        case SHOWUSERFOM:{
            // modal = "userForm"
            return "userForm"
        }

        case CLOSEMODAL:{
            // modal = "none"
            return "none"
        }
        default:
            return modal        
    }
}