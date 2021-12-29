import * as api from '../api/index.js'
import jwt_decode from 'jwt-decode'
// import { now } from 'mongoose'


export const signUp = (user) => async (dispatch) => {
    try {
      const newUser  = await api.signUp(user)
      const decodedAccessToken = jwt_decode(newUser.accessToken)
      const data = {
        id: decodedAccessToken.id,
        name: decodedAccessToken.name,
        avatar: newUser.avatar
       }
      dispatch({ type: "SIGNUP", payload: data })
    } catch (error) {
      console.log(error.message)
    }
  }

export const logIn = (user) => async (dispatch) => {
  try {
    const currentUser = (await api.logIn(user)).data
    const decodedAccessToken = jwt_decode(currentUser.accessToken)
      const data = {
        id: decodedAccessToken.id,
        name: decodedAccessToken.name,
        avatar: currentUser.avatar
       }
    localStorage.setItem("accessToken", currentUser.accessToken)
    localStorage.setItem("refreshToken", currentUser.refreshToken)   
    dispatch({type: "LOGIN", payload: data})
  } catch (error) {
    console.log(error.message)
  }
}

export const logOut = () => {
  localStorage.removeItem("accessToken")
  localStorage.removeItem("refreshToken")
  return{type: "LOGOUT"}
}

export const changeAvatar = (id, img) => async (dispatch) => {
  try {
    const data = await api.changeAvatar(id, img)
    dispatch({type: "CHANGEAVATAR", payload: data})
  } catch (error) {
    console.log(error.message)
  }
}
export const getUser = () => async (dispatch) =>{
  let decodedAccessToken = jwt_decode(localStorage.getItem("accessToken"))
  // if (Date.now() >= decodedAccessToken.exp) {
  //   try {
  //     let newAccessToken = (await api.refresh()).data
  //     decodedAccessToken = jwt_decode(newAccessToken)
  //     localStorage.setItem("accessToken", newAccessToken)
  //   } catch (error) {
  //     console.log(error.message)
  //     console.log("error");
  //   }
  // }
   const data = {
     id: decodedAccessToken.id,
     name: decodedAccessToken.name,
     avatar: (await api.getUserAvatar(decodedAccessToken.id)).data
    }
   dispatch( {type: "GETUSER", payload: {...data}})}
