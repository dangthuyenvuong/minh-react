import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import authReducer from './reducer/authReducer'
import courseReducer from './reducer/courseReducer'


let reducers = combineReducers({
    auth: authReducer,
    course: courseReducer
})


let thunk = store => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch)
    }

    next(action)
}






// function logger(store){
//     return (action) => {
//         return (next) => {

//         }
//     }
// }


// function logger(store) {
//     // Must point to the function returned by the previous middleware:
//     const next = store.dispatch

//     return function dispatchAndLog(action) {
//         console.log('dispatching', action)
//         let result = next(action)
//         console.log('next state', store.getState())
//         return result
//     }
// }

// let middleWare = store => action =


const composeEnhancers =  typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? 
      window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ }) : compose;


export let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))



/**
 * B1: Tạo reducer --> mõi reducer tượng trưng cho 1 store
 * B2: Tạo store từ reducer
 * B3: Gắn store vào App
 */

/**
 * useSelector --> lấy giá trị từ trong store, chỉ định store cần lấy
 * useDispatch --> lây dispatch
 */