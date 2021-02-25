
import axiosApi from '../api/axiosConfig'




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
