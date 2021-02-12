import { combineReducers } from 'redux'
import _ from 'lodash'

function countReducer(state = null, action){
    switch (action.type) {
        case 'COUNT_USER_CONTENTS':
            return action.payload || 0
        default:
            return state
    }
}


function themeReducer(state = true, action){
    switch (action.type) {
        case 'CHANGE_THEME':
            return action.payload || false
        
        default:
            return state
    }
}

function tagReducer(state = {}, action){
    switch (action.type){
        case 'CHANGE_TAGS':
            return { ...state,  [action.payload.id]: action.payload}
        case 'DELETE_TAG':
            console.log(_.omit(state, action.payload))
            return  _.omit(state, action.payload)
        default:
            return state
    }
}


function profileReducer(state = null, action){
    switch (action.type){
        case 'FETCH_PROFILE':
            return action.payload || false
        default:
            return state
    }
}



function authReducer(state =  { token: null, errorMessage: '' }, action){
    switch (action.type){
        case 'ADD_ERROR':
            return {...state, errorMessage: action.payload }
        case 'SIGN_IN':
            return { errorMessage: '', token: action.payload }
        case 'CLEAR_ERROR_MESSAGE':
            return { ...state, errorMessage: ''}
        case 'SIGN_OUT':
            return { token: null, errorMessage: '' }
        default:
            return state
    }
}

export default combineReducers({
    profile: profileReducer,
    auth: authReducer,
    tagList: tagReducer,
    theme: themeReducer,
    count: countReducer
})

