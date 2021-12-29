export default function userReducer (user = {}, action) {
    switch (action.type) {
        case "SIGNUP":
            return {...user, ...action.payload}
        case "LOGIN":
            return {...user, ...action.payload}
        case "LOGOUT": {
            return {}
        }
        case "CHANGEAVATAR":{
            return{...user, avatar: action.payload.data}
        }
        case "GETUSER":{
            return{...user, ...action.payload}
        }
        default: 
            return user
    }
}