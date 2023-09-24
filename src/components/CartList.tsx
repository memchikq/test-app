'use client'

import { useAppDispatch, useAppSelector } from "@/redux/hooks/redux"
import { fetchData } from "@/redux/reduxThunk/fetchData"
import { setPage } from "@/redux/slices/articlesSlice"
import Link from "next/link"
import {useEffect} from 'react'
const CartList = () =>{
    const {data,isLoaded,page,pageSize,query,orderBy,error} = useAppSelector(state => state.articles)
    const dipatcher = useAppDispatch()


      const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
          if(!data.length) return
          dipatcher(setPage(page + 1))
          dipatcher(fetchData({ query, pageSize, orderBy, page:page+1}));
        }
      };
    
      
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [page,handleScroll,data]);

    return (
    <div className="flex flex-wrap justify-center gap-3 mt-4 ">
        {error && <h1 className="text-red-500">{error}</h1>}
        {!error.length && isLoaded && data.map((v,i)=>(
            <div className="w-full bg-gray-700 w3 min-[540px]:w-3/4 min-[690px]:w-2/3 md:w-1/3 " key={i}>
                <div>
                    {v.fields?.thumbnail ? <img className="w-full" src={v.fields.thumbnail}/>
                    : <img className="w-full" src="/empty.jpg"/>
                }
                    
                </div>
                <div className="p-3 flex flex-col">
                    <time>{new Date(v.webPublicationDate).toDateString()}</time>
                    <b>{v.webTitle}</b>
                    <Link href={`/article/${v.id}`} className="text-right text-red-200 cursor-pointer ">Детали</Link>
                </div>
            </div>
        ))}
    
    </div>
    )
}

export default CartList