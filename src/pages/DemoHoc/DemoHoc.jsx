import React from 'react'
import HocModal from '../../HOC/HocModal';
import ModalHoc from '../../HOC/ModalHoc'
import UseStateDemo from '../HooksDemo/UseStateDemo/UseStateDemo';
import Login from '../Login/Login'


//Tạo ra component từ HOC
let WrapFormLoginModal = ModalHoc(Login,'Login');
let WrapUseStateDemoModal = ModalHoc(UseStateDemo,'UseState');

export default function DemoHoc() {
  return (
    <div>
        
        <HocModal Component={Login} id="modal1" title={<h1 className='text-danger'>Login</h1>}/>


        <HocModal Component={UseStateDemo} id="modal2" title={<h1 className='text-danger'>Usestate demo</h1>} />

    </div>
  )
}

/*
    Function: React.FC (React function component) => <props.component />
    JSXElement: <Login />, <Component ... /> => {props.component}

*/