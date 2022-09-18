import React from 'react'
import { useDispatch } from 'react-redux'
import { setModalAction } from '../../../redux/reducers/modalReducer';
import Login from '../../Login/Login';
import CreateProduct from './CreateProduct';

export default function ProductManagement(props) {

  const dispatch = useDispatch();

  return (
    <div className='container'>
      <button className='btn btn-success'  data-bs-toggle="modal" data-bs-target={`#modal`} onClick={()=>{
        const action = setModalAction({
          Component: CreateProduct,
          title:'create product'
        })

        dispatch(action);


      }}>Create product</button>


    </div>
  )
}
