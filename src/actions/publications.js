

import axiosApi from '../api/axiosConfig'




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
