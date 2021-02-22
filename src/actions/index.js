
import { navigate } from '../navigationRef'
import axiosApi from '../api/axiosConfig'
import { AsyncStorage } from 'react-native'
import axios from 'axios'
// const signup = (dispatch) => async ({ email, password }) => {
//     try {
//         const response = await trackerApi.post('/signup', { email, password })
//         await AsyncStorage.setItem('token', response.data.token)
//         dispatch({ type: 'signup', payload: response.data.token})
//         navigate('TrackList')
//     } catch (err) {
//         dispatch({ type: 'add_error', payload: 'Something went wrong'})
//     }
// }

export const changeTheme = () =>  dispatch => {
    
    dispatch({ type: 'CHANGE_THEME', payload: true})
}

export const selectTags = (data) => async dispatch => {
    dispatch({ type: 'CHANGE_TAGS', payload: data}) 
}

export const deleteTag = (data) => async dispatch => {
    dispatch({ type: 'DELETE_TAG', payload: data }) 
}

export const clearTags = () =>  dispatch => {
    dispatch({ type: 'CLEAR_TAGS' }) 
}


export const tryLocalSignin = () => async dispatch=> {
    try {
        const token = await AsyncStorage.getItem('token')
        const profile = await AsyncStorage.getItem('profile')

        if (token) {
            dispatch({ type: 'SIGN_IN', payload: token})
            dispatch({ type: 'FETCH_PROFILE', payload: JSON.parse(profile)}) 
            navigate('Home')
        } else {
           navigate('RegisterOrLogin')
        }
    } catch (err) {
        console.log(err)
    }
}
 


export const signIn =  ({ email, password }) => async dispatch =>  {
    try {
        const res = await axiosApi.post('/signin', { email, password })
        await AsyncStorage.setItem('token', res.data.token)
        await AsyncStorage.setItem('profile', JSON.stringify(res.data.profile))
        JSON.stringify
        dispatch({ type: 'SIGN_IN', payload: res.data.token})
        dispatch({ type: 'FETCH_PROFILE', payload: res.data.profile}) 
        navigate('Home')
    } catch (err) {
        dispatch({
            type: 'ADD_ERROR',
            payload: 'Invalid password or email'
        })
    }
}




export const signUp = ({ email, password, username, name  }) => async dispatch => {
    try {
        const res = await axiosApi.post('/signup', { email, password, username, name  })
        await AsyncStorage.setItem('token', res.data.token)
        await AsyncStorage.setItem('profile', JSON.stringify(res.data.profile))

        dispatch({ type: 'SIGN_IN', payload: res.data.token})
        dispatch({ type: 'FETCH_PROFILE', payload: res.data.profile}) 
        navigate('Home')
    } catch (err) {
        dispatch({ type: 'ADD_ERROR', payload: err.message })
    }
}

export const signOut = () => async dispatch => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'SIGN_OUT' })
    navigate('loginFlow')
}

export const clearErrorMessage = () => dispatch => {
    dispatch({ type: 'CLEAR_ERROR_MESSAGE'})
}


/////////////////////////////////////////
///////// USER ACTIONS /////////////
////////////////////////////////////////


export const fetchUser = ({ id }) => async dispatch => {
    const res = await axiosApi.get(`/users/${id}`)
    dispatch({ type: 'FETCH_USER', payload: res.data })
}

export const updateUser = (id, data) => async dispatch => {
    const { name, username, bio }  = data
    const res = await axiosApi.patch(`/users/${id}`, { name, username, bio })
    await AsyncStorage.setItem('profile', JSON.stringify(res.data))
    dispatch({ type: 'FETCH_PROFILE', payload: res.data })
}


export const fetchUsers= () => async dispatch => {
    const res = await axiosApi.get(`/users`)
    dispatch({ type: 'FETCH_USERS', payload: res.data })
}




export const updateImage = (id,file, type) => async dispatch => {
    const uploadConfig = await axiosApi.get(`/api/upload/${id}`)
    
    await axiosApi.put(uploadConfig.data.url, file, {
        headers: {
            'Content-Type': type
        }
    })
    const res = await axios.put(`/users/${id}`, {imageURL:uploadConfig.data.key})
    await AsyncStorage.setItem('profile', JSON.stringify(res.data))
    dispatch({ type: 'FETCH_PROFILE', payload: res.data })
   

}



/////////////////////////////////////////
///////// COMMUNITY ACTIONS /////////////
////////////////////////////////////////

export const createCommunity = (data) => async dispatch => {
    const res = await axiosApi.post('/communities', data)
    dispatch({ type: 'FETCH_COMMUNITY', payload: res.data })
}
export const fetchCommunity = ({ id }) => async dispatch => {
    const res = await axiosApi.get(`/communities/${id}`)
    dispatch({ type: 'FETCH_COMMUNITY', payload: res.data })
}
export const fetchCommunities= () => async dispatch => {
    const res = await axiosApi.get(`/communities`)
    dispatch({ type: 'FETCH_COMMUNITIES', payload: res.data })
}

export const fetchCommunitiesByUserId = (id) => async dispatch => {
    const res = await axiosApi.get(`/users/${id}/communities`)
    dispatch({ type: 'FETCH_COMMUNITIES', payload: res.data })
}


/////////////////////////////////////////
///////// PUBLICATIONS ACTIONS /////////////
////////////////////////////////////////


export const createPublication = (data) => async dispatch => {
    const { 
        type,
        userId,
        communityId,
        body
     } = data
    const res = await axiosApi.post('/publications', { type, userId, communityId, body })
    dispatch({ type: 'FETCH_PUBLICATION', payload: res.data })
}


export const fetchPublicationsByUserId = (id) => async dispatch => {
    const res = await axiosApi.get(`/users/${id}/publications`)
    dispatch({ type: 'FETCH_PUBLICATIONS', payload: res.data })
}




///////////////////////////////////////////////////////
////////////// USER & COMMUNITY ACTIONS ///////////////
///////////////////////////////////////////////////////



export const followCommunity = (data) => async dispatch => {
    const res = await axiosApi.post(`/follow`, data)
    dispatch({ type: 'FOLLOW_COMMUNITY', payload: res.data})
}

export const unfollowCommunity = (data) => async dispatch => {
    const res = await axiosApi.post(`/unfollow`, data)
    dispatch({ type: 'UNFOLLOW_COMMUNITY', payload: res.data})
}

/// /users/:id/community/:id