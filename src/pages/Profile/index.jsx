import React from 'react'
import Info from './components/Info'
import Course from './components/Course'
import Project from './components/Project'
import PaymentHistory from './components/PaymentHistory'
import Coin from './components/Coin'
import { Switch, Route, useRouteMatch, NavLink, Redirect } from 'react-router-dom'






export default function Profile() {

    let { path } = useRouteMatch()

    let routes = [
        {
            path: `${path}`,
            exact: true,
            sidebar: 'Thông tin tài khoản',
            main: Info
        },
        {
            path: `${path}/khoa-hoc`,
            sidebar: 'Khóa học của bạn',
            main: Course
        },
        {
            path: `${path}/du-an`,
            sidebar: 'Dự án đã làm',
            main: Project
        },
        {
            path: `${path}/lich-su-thanh-toan`,
            sidebar: 'Lịch sử thanh toán',
            main: PaymentHistory
        },
        {
            path: `${path}/coin`,
            sidebar: 'Quản lý COIN của tôi',
            main: Coin
        },
    ]
    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src="/img/avatar-lg.png" alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">trần nghĩa</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            {
                                routes.map(e => <NavLink exact={e.exact} to={e.path}>{e.sidebar}</NavLink>)
                            }

                        </div>
                        <div className="tab-content">
                            <Switch>
                                {
                                    routes.map(e => <Route path={e.path} exact={e.exact} component={e.main} />)
                                }
                            </Switch>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
