import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
export const fetchData = createAsyncThunk("news/fetch",async ({query,total,sortBy: oredrBy}:any)=>{
    const params = {q:query,total,"order-by":oredrBy,"api-key":process.env.NEXT_PUBLIC_API_KEY as string}
    const response = await axios.get("https://content.guardianapis.com/search",{params:params,withCredentials:false})
    return response.data
})