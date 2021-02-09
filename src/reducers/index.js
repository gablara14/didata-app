import { combineReducers } from 'redux'


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



export default combineReducers({
    theme: themeReducer,
    count: countReducer
})

