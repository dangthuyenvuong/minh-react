import { LOGIN_HANDLE, LOGOUT_HANDLE, LOGIN_ERROR } from '../action/type'
let user = JSON.parse(localStorage.getItem('auth'))

let initState = {
    login: !!user,
    user,
    errorLoginMessage: ''
}


export default function authReducer(state = initState, action) {
    switch (action.type) {
        case LOGIN_HANDLE:
            localStorage.setItem('auth', JSON.stringify(action.payload))
            localStorage.setItem('token', JSON.stringify(action.payload.token))

            return {
                ...state,
                login: true,
                user: action.payload
            }

            break;

        case LOGOUT_HANDLE:
            localStorage.removeItem('auth')
            localStorage.removeItem('token')
            return {
                ...state,
                login: false,
                user: null
            }
            break;
        case LOGIN_ERROR:
            return {
                ...state,
                errorLoginMessage: action.payload
            }
        default:
            break;
    }
    return state
}