
let user = JSON.parse(localStorage.getItem('auth'))

let initState = {
    login: !!user,
    user,
    errorLoginMessage: ''
}

export default function courseReducer(state = initState, action) {
    switch (action.type) {
        default:
            break;
    }
    return state
}