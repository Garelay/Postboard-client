import axios from "axios"
import jwtDecode from "jwt-decode"

const postUrl="http://localhost:5000/posts"
const userUrl="http://localhost:5000/user"

// adds a jwt header
axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
})

// if request was denied, tries to refresh token and repeat the request
axios.interceptors.response.use((config)=> config,
    async (error)=>{
        const originalRequest = error.config
        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true;
            try {
                const id = jwtDecode(localStorage.getItem('refreshToken')).id
                const data = {token: localStorage.getItem('refreshToken')}
                const response = await axios.post(`${userUrl}/refresh/${id}`, data)
                localStorage.setItem('accessToken', response.data)
                return axios.request(originalRequest);
            } catch (e) {
                console.log('НЕ АВТОРИЗОВАН')
            }
        }
        throw error;
    })


export const fetchPosts = () => axios.get(postUrl)
export const createPost = (newPost) => axios.post(postUrl, newPost)
export const likePost = (id) => axios.patch(`${postUrl}/${id}/likePost`)
export const deletePost = (id) => axios.delete(`${postUrl}/${id}`)
export const updatePost = (id, updatedPost) => axios.patch(`${postUrl}/${id}`, updatedPost)



export const signUp = (newUser) => axios.post(`${userUrl}/signup`, newUser)
export const logIn = (user) => axios.post(`${userUrl}/login`, user)
export const changeAvatar = (id, img) => axios.patch(`${userUrl}/${id}`, {avatar: img})
export const getUserAvatar = (id) => axios.get(`${userUrl}/${id}`)


// after refactoring this function seems to be unnecessary, since interceptors do the same.

// export const refresh = async () => {
//     const id = jwtDecode(localStorage.getItem('refreshToken')).id
//     const data = {token: localStorage.getItem('refreshToken')}
//     return await axios.post(`${userUrl}/refresh/${id}`, data)
//     }