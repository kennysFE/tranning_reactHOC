import React, { useEffect, useState } from 'react'
import useRoute from '../../hooks/useRoute'
import { useCookie } from 'react-use'
import useCookieCustom from '../../hooks/useCookie';
export default function DemoUseRoute() {

    const { navigate, params, searchParams: [search, setSearch] } = useRoute();
    const [setCookie, getCookie] = useCookieCustom('my-cookie','');

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
        console.log(username,password);
        setCookie(username,30);
    }

    return (
        <form className='container' onSubmit={handleSubmit}>
            <h3>Login cookie</h3>
            <div className='form-group'>
                <p>Nhập vào username</p>
                <input id="username" className='form-control' />
            </div>
            <div className='form-group'>
                <p>Nhập vào username</p>
                <input id="password" className='form-control' type={'password'} />
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-success'>Login</button>
            </div>
        </form>
    )
}
