import React, { useState, useContext, useReducer, useEffect } from 'react'
import reactDOM from 'react-dom'
import { useAuth } from '../../context/AuthContext'
import { initialState, reducer } from './reducer'
import { useDispatch, useSelector } from 'react-redux'
import authService from '../../services/auth'
import { fetchLogin, loginHandle } from '../../redux/action/authAction'
import { useForm } from '../../core/useForm'


export default function LoginModal() {


    const storeDispatch = useDispatch()

    let { errorLoginMessage, login } = useSelector(store => store.auth)

    let [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if (login) {
            _closePopup()
        }
    }, [login])


    let { register, handleSubmit, form, error } = useForm()


    function _closePopup() {
        document.querySelector('.popup-login').style.display = 'none'
    }


    function submit(value) {
        console.log(value)
    }

    let { errorMessage } = state

    return reactDOM.createPortal(
        <div className="popup-form popup-login" style={{ display: 'none' }} onClick={_closePopup}>
            <div className="wrap" onClick={(e) => e.stopPropagation()}>
                {/* login-form */}
                <div className="ct_login" style={{ display: 'block' }}>
                    <form action="" onSubmit={handleSubmit(submit)}>
                        <h2 className="title">Đăng nhập</h2>
                        {errorLoginMessage && <p className="error-text">{errorLoginMessage}</p>}
                        <input type="text" placeholder="Email / Số điện thoại" {...register('username', { pattern: 'email' })} />
                        {
                            error.username && <p className="error-text">{error.username}</p>
                        }
                        <input type="password" placeholder="Mật khẩu" {...register('password',{ required: true, min: 6, max: 32 } )} />
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
                        <button className="btn rect main btn-login" >đăng nhập</button>
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
                    </form>
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