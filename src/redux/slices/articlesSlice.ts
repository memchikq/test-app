import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../reduxThunk/fetchData';
import type { PayloadAction } from '@reduxjs/toolkit'
interface Article{
  apiUrl:string
  id:string
  isHosted:boolean
  pillarId:string
  pillarName:string
  sectionId:string
  sectionName:string
  type:string
  webPublicationDate: string
  webTitle:string
  webUrl:string
  fields?:{
    thumbnail:string
  }
}

interface InitialState {
  data:Article[]
  isLoaded:boolean
  query:string
  pageSize:number,
  orderBy:string
  page:number
  error:string

}


const initialState:InitialState = {
  data: [],
  isLoaded: false,
  query:"",
  pageSize:1,
  orderBy:"relevance",
  page:1,
  error:""
};

const counterSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setQuery(state: InitialState,action:PayloadAction<string>){
      state.query = action.payload
    },
    setPageSize(state: InitialState,action:PayloadAction<number>){
      state.pageSize = action.payload
    },
    setOrderBy(state: InitialState,action:PayloadAction<string>){
      state.orderBy = action.payload
    },
    setPage(state: InitialState,action:PayloadAction<number>){
      state.page = action.payload
    }
  },
  extraReducers:(builder:any)=>{
    builder.addCase(fetchData.fulfilled, (state: InitialState, action:any) => {
      state.data.push(...action.payload.response.results)
    })
    builder.addCase(fetchData.pending,(state: InitialState, action:any)=>{
      state.isLoaded = true
    })
    builder.addCase(fetchData.rejected,(state: InitialState, action:any)=>{
      if (action.payload) {
        state.error = action.payload.errorMessage
      } else {
        state.error = action.error.message
      }
    })
  }
  
});

export const { setQuery,setPageSize,setOrderBy,setPage } = counterSlice.actions;
export default counterSlice.reducer;