import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
export const fetchData = createAsyncThunk("articles/fetch",async ({query,pageSize,orderBy,page}:any)=>{
    const params = {"show-fields":"thumbnail",q:query,"page-size":pageSize,"order-by":orderBy,page,"api-key":process.env.NEXT_PUBLIC_API_KEY as string}
    const response = await axios.get("https://content.guardianapis.com/search",{params:params,withCredentials:false})
    return response.data
})