//rxslice
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { http } from '../../util/config';

const initialState = {
    arrProduct: [
        {id:1,name:'Giày 1 ',price:1000,image:'https://picsum.photos/200/200'}
    ],
    productDetail : {

    }
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setArrProductAction : (state,action) => {
        //Lấy ra dữ liệu từ payload component dispatch lên
        const arrProduct = action.payload;
        //Cập nhật lại state
        state.arrProduct = arrProduct;
    },
    setProductDetailAction: (state,action)=>{
        //Lấy dữ liệu từ payload 
        const productDetail = action.payload;
        //Cập nhật lại state.productDetail
        state.productDetail = productDetail;
    }
  }
});

export const {setArrProductAction,setProductDetailAction} = productReducer.actions

export default productReducer.reducer

//----------------- action api ---------------

export const getProductApi = async (dispatch2) => {
    //Xử lý logic api để trả về kết quả
    try {
        let result = await http.get('/Product');
        console.log('Kết quả', result.data.content);
        //dispatch lên redux
        const action = setArrProductAction(result.data.content);
        /*
            action = {
                type:'productReducer/setArrProductAction',
                payload:result.data.content
            }
         */
        dispatch2(action);
    } catch (err) {
        console.log(err);
    }
}


//closure function
export const getProductDetailActionApi = (idProduct) => {

    return async dispatch => {
        //logic api gọi tại đây
        try {
            const result = await http.get(`/Product/getbyid?id=${idProduct}`)
            //Sau khi có dữ liệu gửi lên action loại 1 đưa lên reducer
            const actionLoai1 =  setProductDetailAction(result.data.content);
            dispatch(actionLoai1);
            
        }catch(err){
            console.log({err})
        }
    }
}

/*
const addProductApi = ()=> {
    return async dispatch => {
        //gọi addProductApi
        axios post => thêm dữ liệu

        axios getAll => Lậy dữ mới về sau khi thêm
        //gọi api getAl
        dispatch(getProductApi)
    }
} 
*/