import { createStore, combineReducers } from 'redux'
import authReducer from './reducer/authReducer'
import courseReducer from './reducer/courseReducer'


let reducers = combineReducers({
    auth: authReducer,
    course: courseReducer
})





export let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



/**
 * B1: Tạo reducer --> mõi reducer tượng trưng cho 1 store
 * B2: Tạo store từ reducer
 * B3: Gắn store vào App
 */

/**
 * useSelector --> lấy giá trị từ trong store, chỉ định store cần lấy
 * useDispatch --> lây dispatch
 */