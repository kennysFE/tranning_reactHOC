//rfcredux

import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { changeNumber } from '../../../../redux/reducers/numberReducer';

export default function DemoNumber(props) {

    const { number } = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className='container'>
            <h3>Number: {number}</h3>
            <button className='btn btn-success' onClick={() => {
                //tự tạo action để dispatch reducer slice
                //Cách 1: tự tạo ra action
                // const action = {
                //     type: 'numberReducer/changeNumber',
                //     payload: number + 1
                // }
                //Cách 2 :action creator
                const action = changeNumber(number+1);
                //{
                //     type: 'numberReducer/changeNumber',
                //     payload: number + 1
                // }

                console.log(action)
                dispatch(action);
            }}>+</button>
        </div>
    )
}

