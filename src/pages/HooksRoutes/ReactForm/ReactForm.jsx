import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ReactForm(props) {
  const navigate = useNavigate();
  // console.log(props)
  const userLoginRef = useRef({
    userName: '',
    passWord: ''
  });
  const handleChange = (e) => {
    const { value, id } = e.target;
    userLoginRef.current[id] = value;
    console.log(userLoginRef.current);
  }
  const handleSubmit =  (e) => {
    e.preventDefault(); //Chặn reload browser
    console.log(userLoginRef.current);
    let promise = new Promise((resolve,fail) => {
      
      setTimeout(() => {
        if(userLoginRef.current.userName == 'cybersoft'){
          console.log('Đăng nhập api')
          resolve('Đăng nhập thành công!');
        }else {
          fail('Tài khoản mật khẩu không đúng!');
        }
      }, 3000);
    })
   
    promise.then(result => {
      console.log(result);
      navigate('/profile');
    });
    promise.catch(error => {
      console.log(error);
      navigate('/')
    })


  }
  return (
    <form className='container' onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className='form-group'>
        <p>username</p>
        <input className='form-control' id="userName" onChange={handleChange} />
      </div>
      <div className='form-group'>
        <p>password</p>
        <input className='form-control' id="passWord" onChange={handleChange} />
      </div>
      <div className='form-group'>
        <button className='btn btn-success'>Login</button>
      </div >
    </form >
  )
}
