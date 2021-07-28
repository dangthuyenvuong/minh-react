import authService from '../../services/auth'
import { LOGIN_HANDLE, LOGOUT_HANDLE, LOGIN_ERROR } from './type'


export function loginHandle(form) {
    return {
        type: LOGIN_HANDLE,
        payload: form,
    }
}

export function logoutHandle() {
    return {
        type: LOGOUT_HANDLE
    }
}

export function fetchLogin(form) {

    return async (dispatch) => {
        let res = await authService.login(form)

        if (res.error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: res.error
            })

        } else {
            dispatch(loginHandle(res.data))

        }
    }
}