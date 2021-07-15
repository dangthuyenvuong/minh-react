import { LOGIN_HANDLE, LOGOUT_HANDLE } from './type'


export function loginHandle(form, success) {
    return {
        type: LOGIN_HANDLE,
        payload: form,
        success
    }
}

export function logoutHandle(){
    return {
        type: LOGOUT_HANDLE
    }
}