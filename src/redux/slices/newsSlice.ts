import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../fetchData';

const initialState = {
  data: []
};

const counterSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    decrement(state) {
      state.data = [];
    },
  },
  extraReducers:(builder:any)=>{
    builder.addCase(fetchData.fulfilled, (state:any, action:any) => {
      console.log(action)
    })
  }
  
});

export const { decrement } = counterSlice.actions;
export default counterSlice.reducer;