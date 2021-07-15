import { LOGIN_HANDLE, LOGOUT_HANDLE } from '../action/type'
let user = JSON.parse(localStorage.getItem('auth'))

let initState = {
    login: !!user,
    user,
    errorLoginMessage: ''
}

export default function authReducer(state = initState, action) {
    switch (action.type) {
        case LOGIN_HANDLE:
            let { error, data } = action.payload
            if (error) {
                return {
                    ...state,
                    errorLoginMessage: action.payload.error
                }
            }
            localStorage.setItem('auth', JSON.stringify(data))
            localStorage.setItem('token', JSON.stringify(data.token))
            action.success()
            return {
                ...state,
                login: true,
                user: data
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
        default:
            break;
    }
    return state
}