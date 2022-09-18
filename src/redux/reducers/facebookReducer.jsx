//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment: [
        {name:'Hậu mentor',content:'ahihi'},
        {name:'Quân mentor',content:'ahihi 2'},
    ]
}

const facebookReducer = createSlice({
  name: 'facebookReducer',
  initialState,
  reducers: {
    addComment: (state,action) => {
        //b1: Lấy dữ liệu từ payload
        let userComment = action.payload;
        //clone state
        // let arrCommentUpdate = [...state.arrComment];
        // arrCommentUpdate.push(userComment);
        // state.arrComment = arrCommentUpdate;
        //b2: cập nhật state
        state.arrComment.push(userComment);
    }
  }
});

export const {addComment} = facebookReducer.actions

export default facebookReducer.reducer

