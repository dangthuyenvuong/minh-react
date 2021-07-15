import React, { useState, useContext, useReducer } from 'react'
import reactDOM from 'react-dom'
import { useAuth } from '../../context/AuthContext'
import { initialState, reducer } from './reducer'
import { useDispatch, useSelector } from 'react-redux'
import authService from '../../services/auth'
import { loginHandle } from '../../redux/action/authAction'


export default function LoginModal() {

    // let { loginHandle } = useAuth()

    const storeDispatch = useDispatch()

    let { errorLoginMessage } = useSelector(store => store.auth)

    let [state, dispatch] = useReducer(reducer, initialState)

    // let [form, setForm] = useState({
    //     username: '',
    //     password: ''
    // })
    // let [error, setError] = useState({})

    // let [errorMessage, setErrorMessage] = useState()

    function _onChange(e) {
        let name = e.currentTarget.name
        let value = e.currentTarget.value
        let { form } = state;

        dispatch({
            type: 'FORM_CHANGE',
            form: {
                ...form,
                [name]: value
            }
        })
    }

    function _closePopup() {
        document.querySelector('.popup-login').style.display = 'none'
    }


    async function _onSubmit(e) {

        e.preventDefault()

        let errorObj = {}

        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(form.username)) {
            errorObj.username = 'Email không đúng định dạng'
        }

        if (!form.password.trim()) {
            errorObj.password = 'Password không được để trống'
        }
        // setError(errorObj)
        dispatch({
            type: 'SET_ERROR',
            error: errorObj
        })

        if (Object.keys(errorObj).length === 0) {
            try {


                // let result = await loginHandle(form)

                let res = await authService.login(form)

                storeDispatch(loginHandle(res, () => {
                    _closePopup()
                }))

                // if (result?.error) {
                //     dispatch({
                //         type: 'SET_ERROR_MESSAGE',
                //         errorMessage: result.error
                //     })
                //     // setErrorMessage(result.error)
                // } else {
                //     _closePopup()
                // }



            } catch (err) {
                console.error(err)
            }
        }
    }

    let { form, error, errorMessage } = state




    return reactDOM.createPortal(
        <div className="popup-form popup-login" style={{ display: 'none' }} onClick={_closePopup}>
            <div className="wrap" onClick={(e) => e.stopPropagation()}>
                {/* login-form */}
                <div className="ct_login" style={{ display: 'block' }}>
                    <h2 className="title">Đăng nhập</h2>
                    {errorLoginMessage && <p className="error-text">{errorLoginMessage}</p>}
                    <input type="text" placeholder="Email / Số điện thoại" name="username" value={form.username} onChange={_onChange} />
                    {
                        error.username && <p className="error-text">{error.username}</p>
                    }
                    <input type="password" placeholder="Mật khẩu" name="password" value={form.password} onChange={_onChange} />
                    {
                        error.password && <p className="error-text">{error.password}</p>
                    }
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                    </div>
                    <div className="btn rect main btn-login" onClick={_onSubmit}>đăng nhập</div>
                    <div className="text-register" style={{}}>
                        <strong>hoặc đăng ký bằng</strong>
                    </div>
                    <div>
                        <div className="btn btn-icon rect white btn-google">
                            <img src="img/google.svg" alt="" />
                            Google
                        </div>
                    </div>
                    <div className="close" onClick={_closePopup}>
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}



// function func (){

//     return new Promise((resolve, reject) => {
//         // code
//         // code 

//         setTimeout(() => {
//             reject('Mot error nao do')
//         }, 2000);
//     })
// }


// func().then(res => console.log(res)).catch(errr => console.error(errr))