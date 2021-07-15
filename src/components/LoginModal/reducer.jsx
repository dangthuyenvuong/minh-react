export let initialState = {
    form: {
        username: '',
        password: '',
    },
    
    error: {},
    errorMessage: ''
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FORM_CHANGE':
            return {
                ...state,
                form: action.form
            }
            break;
        case 'SET_ERROR':
            return {
                ...state,
                error: action.error
            }
            break;

        case 'SET_ERROR_MESSAGE':
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        default:
            break;
    }

    return state;
}