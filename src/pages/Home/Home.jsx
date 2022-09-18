import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getProductApi, setArrProductAction } from '../../redux/reducers/productReducer';
export default function Home(props) {

    // const [arrProduct, setArrProduct] = useState([]);
    const { arrProduct } = useSelector(state => state.productReducer);

    const dispatch = useDispatch();


    const getApiProduct = async () => {
        /*
            action có 2 dạng: 
            + action dạng 1: 
                action = {
                    type:action_name,
                    payload:data
                }
            + action (thunk) 2:
                action = (dispatch2,getState) => {
                    //logic xử lý ở đây sau đó có dữ liệu
                    sẽ dùng tham số dispatch2 để đưa redux hoặc thực hiện tiếp 1 logic khác
                }
        */
        const actionLoai2 = getProductApi;
        //dispatch action thunk
        dispatch(actionLoai2);

    }

    const renderProduct = () => {
        return arrProduct.map((item, index) => {
            return <div className='col-3 mt-2' key={index}>
                <div className='card'>
                    <img src={item.image} alt="..." />
                    <div className='card-body bg-dark text-light'>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        {/* <button className='btn btn-success'>View detail</button> */}
                        <NavLink to={`/detail/${item.id}`} className="btn btn-success">View detail</NavLink>
                    </div>
                </div>
            </div>
        })
    }

    useEffect(() => {
        //Sau khi giao diện load xong thì gọi api thực thi 
        getApiProduct();
    }, [])



    return (
        <div className='container'>
            <h3>Shoes app</h3>
            <div className='row'>
                {renderProduct()}
            </div>

        </div>
    )
}
