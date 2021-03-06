import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import { useSelector, useDispatch } from 'react-redux'
import { logoutHandle } from '../../../redux/action/authAction'

export default function Header() {

    // let { login, user, logoutHandle } = useAuth()
    let { user } = useSelector(store => store.auth)
    let dispatch = useDispatch()

    console.log(user)
    function _openLoginPopup() {
        document.querySelector('.popup-login').style.display = 'flex'
    }

    function _toggleMenu() {
        document.body.classList.toggle('menu-is-show')
    }


    return (
        <header id="header">
            <div className="wrap">
                <div className="menu-hambeger" onClick={_toggleMenu}>
                    <div className="button">
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className="text">menu</span>
                </div>
                <Link to="/" className="logo">
                    <img src="/img/logo.svg" alt="" />
                    <h1>CFD</h1>
                </Link>
                <div className="right">
                    {
                        user ? (
                            <div className="have-login">
                                <div className="account">
                                    <Link to="/thong-tin-ca-nhan" className="info">
                                        <div className="name">{user.title}</div>
                                        <div className="avatar">
                                            <img src={user?.avatar?.link} alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="hamberger">
                                </div>
                                <div className="sub">
                                    <Link to="/thong-tin-ca-nhan/khoa-hoc">Kh??a h???c c???a t??i</Link>
                                    <Link to="/thong-tin-ca-nhan">Th??ng tin t??i kho???n</Link>
                                    <Link to="#" onClick={e => dispatch(logoutHandle())}>????ng xu???t</Link>
                                </div>
                            </div>
                        ) : (
                            <div class="not-login bg-none">
                                <a href="#" class="btn-register" onClick={_openLoginPopup}>????ng nh???p</a>
                                <a href="login.html" class="btn main btn-open-login">????ng k??</a>
                            </div>
                        )
                    }
                </div>
            </div>
        </header>
    )
}
