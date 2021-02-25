
import axiosApi from '../api/axiosConfig'





export const followCommunity = (data) => async dispatch => {
    const res = await axiosApi.post(`/follow`, data)
    dispatch({ type: 'FOLLOW_COMMUNITY', payload: res.data})
}

export const unfollowCommunity = (data) => async dispatch => {
    const res = await axiosApi.post(`/unfollow`, data)
    dispatch({ type: 'UNFOLLOW_COMMUNITY', payload: res.data})
}

