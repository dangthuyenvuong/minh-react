import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Sidebar() {
    function _closeMenu() {
        document.body.classList.remove('menu-is-show')
    }

    function _aClick(){
        _closeMenu()
    }

    return (
        <>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <a href="#">Đăng nhập</a>
                        <a href="#">Đăng ký</a>
                    </li>
                    <li >
                        <NavLink onClick={_aClick} exact to="/">Trang chủ</NavLink>
                    </li>
                    <li>
                        <a onClick={_aClick} href="#">CFD Team</a>
                    </li>
                    <li>
                        <a onClick={_aClick} href="#">Khóa Học</a>
                    </li>
                    <li>
                        <a onClick={_aClick} href="#">Dự Án</a>
                    </li>
                    <li>
                        <NavLink onClick={_aClick} to="/lien-he">Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" onClick={_closeMenu} />
        </>
    )
}
