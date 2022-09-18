import React, { useState,useReducer } from 'react'
import { useRef } from 'react';
/*
    useRef: Tương tự useState tuy nhiên khi thay đổi giá trị useRef component không render lại (UseRef dùng để lưu giá trị sau mỗi lần render)
    useRef thường sử dụng cho các form không có validation hoặc load dữ liệu chỉnh sửa
*/
export default function UseRefDemo(props) {

    const [number, setNumber] = useState(1);
    // const [userLogin,setUserLogin] = useState({username:'',password:''});
    // console.log(userLogin);
    // let userLogin = { username: '', password: '' };
    const userLoginRef = useRef({username:'',password:''})
    console.log('render');

    const handleChangeInput = (e) => {
        const { id, value } = e.target;
        userLoginRef.current[id] = value;
        console.log(userLoginRef.current);
        // setUserLogin({
        //     ...userLogin,
        //     [id]:value
        // })

    }

    const handleSubmit = (e) => {
        e.preventDefault(); //Chặn sự kiện reload browser

        console.log(userLoginRef.current)
    }

    return (
        <form className='container' onSubmit={handleSubmit}>
            <h1>Number: {number}</h1>
            <button className='btn btn-success' onClick={() => { setNumber(number + 1) }}>+</button>
            <h3>Login</h3>
            <div className='form-group'>
                <p>username</p>
                <input className='form-control' id="username" onChange={handleChangeInput} />
            </div>
            <div className='form-group'>
                <p>password</p>
                <input className='form-control' id="password" type="password" onChange={handleChangeInput} />
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-success'>Login</button>
            </div>
        </form>
    )
}
