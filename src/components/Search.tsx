'use client'
import { fetchData } from "@/redux/reduxThunk/fetchData"
import { useAppDispatch, useAppSelector } from "@/redux/hooks/redux"

import { setQuery,setOrderBy, setPageSize } from "@/redux/slices/articlesSlice"


const Search = () =>{
    const dipatcher = useAppDispatch()
    const {query,orderBy,pageSize,page} = useAppSelector(state => state.articles)
    const fetchArticles = () =>{
      if(!query.trim().length) return
      dipatcher(fetchData({query,pageSize,orderBy,page}))
  }

    return (
        <div className='max-w-md bg-gray-600 p-3 flex flex-col items-center justify-between gap-2'>
        
        <div className='flex justify-between gap-2'>
          <input style={{color:"blue"}} value={query} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>dipatcher(setQuery(e.target.value))} className='bg-gray-500' />
          <button onClick={fetchArticles} className='bg-green-600 p-2'>Поиск</button>
        </div>
        <div className='text-black flex gap-4'>
          <select value={orderBy} onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>dipatcher(setOrderBy(e.target.value))}  >
            <option value="oldest">oldest</option>
            <option value="newest">newest</option>
            <option value="relevance">relevance</option>
          </select>
          <div className='flex flex-col'>
  
          <label className='text-gray-400' htmlFor='num'>num of articles</label>
          <select value={pageSize} onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>dipatcher(setPageSize(parseInt(e.target.value)))} id='num'>
            {new Array(50).fill(0).map((_,i)=>(
              <option key={i} value={i+1}>{i+1}</option>
              ))}
          </select>
          </div>
        </div>
       </div>
    )
}

export default Search
