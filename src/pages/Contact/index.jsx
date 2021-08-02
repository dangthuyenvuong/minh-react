import React, { useState, useRef, useEffect, useImperativeHandle } from 'react'
import { useForm } from '../../core/useForm'
import { getURLQueryToObject } from '../../utils'

export default function Contact() {


    // let [form, setForm] = useState({
    //     name: '',
    //     phone: '',
    //     email: '',
    //     website: '',
    //     title: '',
    //     content: ''
    // })
    // let [error, setError] = useState({})

    // function _onChange(e) {
    //     let name = e.currentTarget.name
    //     let value = e.currentTarget.value

    //     setForm({
    //         ...form,
    //         [name]: value
    //     })
    // }


    // function _submit(e) {
    //     e.preventDefault()
    //     // let { form, setError } = formRef.current

    //     let errorObj = {}
    //     if (!form.name.trim()) {
    //         errorObj.name = 'Họ và tên không được để trống'
    //     }
    //     if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(form.email)) {
    //         errorObj.email = 'Email không đúng định dạng'
    //     }
    //     if (form.phone.trim()) {
    //         if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
    //             errorObj.phone = 'Số điện thoại không đúng định dạng'
    //         }
    //     }
    //     if (!form.title.trim()) {
    //         errorObj.title = 'Tiêu đề không được để trống'
    //     }
    //     if (!form.content.trim()) {
    //         errorObj.content = 'Nội dung không được để trống'
    //     }
    //     console.log(form)
    //     setError(errorObj)

    //     if (Object.keys(errorObj).length === 0) {
    //         alert('Thành công')
    //     }
    // }




    let { error, handleSubmit, register } = useForm()

    function submit(value) {
        alert('Thanh cong')
    }

    return (
        <main className="register-course" id="main">

            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des" >
                    Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
                    việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
                </p>
                <form className="form" onSubmit={handleSubmit(submit)}>
                    <label>
                        <p>Họ và tên<span>*</span></p>
                        <input type="text" placeholder="Họ và tên bạn" {...register('name', { required: true }, { required: 'Họ và tên không được để trống' })} />
                    </label>
                    {
                        error.name && <p className="error-text">{error.name}</p>
                    }
                    <label>
                        <p>Số điện thoại</p>
                        <input type="text" placeholder="Số điện thoại" {...register('phone', { pattern: 'phone' })} />
                    </label>
                    {
                        error.phone && <p className="error-text">{error.phone}</p>
                    }
                    <label>
                        <p>Email<span>*</span></p>
                        <input type="text" placeholder="Email của bạn"{...register('email', { pattern: 'email', required: true }, { pattern: 'Email phải là dạng example@gmail.com', required: 'Email không được để trống' })} />
                    </label>
                    {
                        error.email && <p className="error-text">{error.email}</p>
                    }
                    <label>
                        <p>Website</p>
                        <input type="text" placeholder="Đường dẫn website http://" {...register('website', { pattern: 'url' })} />
                    </label>
                    {
                        error.website && <p className="error-text">{error.website}</p>
                    }
                    <label>
                        <p>Tiêu đề<span>*</span></p>
                        <input type="text" placeholder="Tiêu đề liên hệ" {...register('title', { required: true })} />
                    </label>
                    {
                        error.title && <p className="error-text">{error.title}</p>
                    }
                    <label>
                        <p>Nội dung<span>*</span></p>
                        <textarea name id cols={30} rows={10} name="content" {...register('content', { required: true })} />
                    </label>
                    {
                        error.content && <p className="error-text">{error.content}</p>
                    }
                    <button className="btn main rect" >đăng ký</button>
                </form>
            </section>
            {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
        </main>
    )
}

// Ref Level 1: đặt trực tiếp ref vào element
// Ref level 2: forward ref
// Ref level 3: forward ref -> thể hiện khác của ref






// useState, useEffect, useImperativeHandle, 
// useContext, useReducer, useCallback, useMemo, useDebug
