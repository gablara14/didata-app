
import { navigate } from '../navigationRef'

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