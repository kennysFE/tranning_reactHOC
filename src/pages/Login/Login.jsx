import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signinApi } from '../../redux/reducers/userReducer';
import {useDispatch} from 'react-redux'
export default function Login(props) {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:Yup.object().shape({
            email: Yup.string().required('Email không được bỏ trống !').email('Email không đúng định dạng!'),
            password: Yup.string().required('Password không được bỏ trống !').min(3,'password từ 3 - 32 ký tự!').max(32,'password từ 3 đến 32 ký tự!')
            // .matches(/cybersoft/,'Password phải có cybersoft')
        })
        ,
        onSubmit: (values)=>{
            // console.log(values)
            const action = signinApi(values);
            dispatch(action);

            
        }
    });
  return (
    <form className='container' onSubmit={formik.handleSubmit}>
        <h3>Login</h3>
        <div className='form-group'>
            <p>Email</p>
            <input className='form-control' id="email" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.email ? <p className='text text-danger'>{formik.errors.email}</p> : ''}
        </div>
        <div className='form-group'>
            <p>password</p>
            <input className='form-control' id="password" name='password' onChange={formik.handleChange}  onBlur={formik.handleBlur} />
            {formik.errors.password ? <p className='text text-danger'>{formik.errors.password}</p> : ''}
        </div>
        <div className='form-group'>
           <button type='submit' className='btn btn-success mt-2'>Login</button>
        </div>
    </form>
  )
}
