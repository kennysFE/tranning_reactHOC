import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setSubmitAction } from '../../../redux/reducers/modalReducer'


export default function CreateUser() {

    const formik = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })
    const dispatch = useDispatch();
    useEffect(() => {
        const action = setSubmitAction(formik.handleSubmit);
        dispatch(action);
    
    },[])
  return (
    <form className='container' onSubmit={formik.handleSubmit}>
        <div className='form-group'>
            <p>username</p>
            <input className='form-control' id="username" onChange={formik.handleChange} />
        </div>
        <div className='form-group'>
            <p>password</p>
            <input className='form-control' id="password" onChange={formik.handleChange} />
        </div>
        <div className='form-group'>
            <button className='btn btn-success'>CreateUser</button>
        </div>
    </form>
  )
}
