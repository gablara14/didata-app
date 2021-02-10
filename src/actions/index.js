
import { navigate } from '../navigationRef'
import axiosApi from '../api/axiosConfig'
import { AsyncStorage } from 'react-native'
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


export const changeTheme = () => async dispatch => {
    
    dispatch({ type: 'CHANGE_THEME', payload: true})
}

export const selectTags = (data) => async dispatch => {

    dispatch({ type: 'CHANGE_TAGS', payload: data}) 
}


export const tryLocalSignin = dispatch => async () => {
    try {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            dispatch({ type: 'SIGN_IN', payload: token})
            // navigate('HOME')
        } else {
           navigate('RegisterOrLogin')
        }
    } catch (err) {
        console.log(err)
    }
}
 





export const signUp = ({ email, password }) => async dispatch => {
    try {
        const res = await axiosApi.post('/signup', { email, password })
        await AsyncStorage.setItem('token', res.data.token)
        dispatch({ type: 'SIGN_IN', payload: res.data.token}) 
        navigate('Home')
    } catch (err) {
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong'})
    }
}

