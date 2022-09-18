//rxslice
import React from 'react';
import { createSlice } from '@reduxjs/toolkit'


const ComponentDefault = (props)=>{
    return <div>
        default value
    </div>
}
const initialState = {
    title: 'title',
    Component: ComponentDefault,
    submitForm : () => {
      alert('submit form');
    }
}

const modalReducer = createSlice({
  name: 'modalReducer',
  initialState,
  reducers: {
    setModalAction:(state,action)=>{//payload: Component,title
        //Lấy state từ payload ra 
        const {Component,title} = action.payload;
        state.Component = Component;
        state.title = title;
    },
    setSubmitAction: (state,action) => {
      //payload: function submit form
      state.submitForm = action.payload;
    }
  }
});

export const {setModalAction,setSubmitAction} = modalReducer.actions

export default modalReducer.reducer


