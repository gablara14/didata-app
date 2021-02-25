
import { navigate } from '../navigationRef'
import axiosApi from '../api/axiosConfig'

import { AsyncStorage } from 'react-native'



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



export const updateImage = (id,file) => async dispatch => {
    const uploadConfig = await axiosApi.get(`/api/upload/${id}`)
    
    await axiosApi.put(uploadConfig.data.url, file, {
        headers: {
            'Content-Type': file.type
        }
    })
    const res = await axiosApi.patch(`/users/${id}`, {imageURL:uploadConfig.data.key})
    await AsyncStorage.setItem('profile', JSON.stringify(res.data))
    dispatch({ type: 'FETCH_PROFILE', payload: res.data })
}

