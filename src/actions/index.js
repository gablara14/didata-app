export * from './auth'
export * from './communities'
export * from './publications'
export * from './userCommunity'
export * from './users'



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

