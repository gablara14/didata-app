



import { navigate } from '../navigationRef'
import axiosApi from '../api/axiosConfig'
import { AsyncStorage } from 'react-native'




export const tryLocalSignin = () => async dispatch=> {
    try {
        const token = await AsyncStorage.getItem('token')
        const profile = await AsyncStorage.getItem('profile')
        const followingList = await axiosApi.get(`/follow/${(JSON.parse(profile))._id}`)
        console.log('REEEEEEEEEEEEEESPONSEEEEEEEEEEEEEEEEEEEEEEEEEEEEE', followingList.data)
        if (token) {
            dispatch({ type: 'SIGN_IN', payload: token})
            dispatch({ type: 'FETCH_PROFILE', payload: JSON.parse(profile)}) 
            dispatch({ type: 'FETCH_FOLLOWING', payload: followingList.data })
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

        dispatch({ type: 'FETCH_FOLLOWING', payload: res.data.followingList})
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
