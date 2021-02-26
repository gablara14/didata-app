
import axiosApi from '../api/axiosConfig'




export const createCommunity = (data) => async dispatch => {
    const {
        name,
        description,
        file,
        categories,
        userId,
        closedCommunity,
        anyoneCanPost,
        hiddenCommunity
    } = data
    const uploadConfig = await axiosApi.get(`/api/upload/${userId}`)
    await axiosApi.put(uploadConfig.data.url, file, { headers: {'Content-Type': file.type}})
    
    const res = await axiosApi.post('/communities', {
        name,
        description,
        imageURL: uploadConfig.data.key,
        categories,
        userId,
        closedCommunity,
        anyoneCanPost,
        hiddenCommunity
    })
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
