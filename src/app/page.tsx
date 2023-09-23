'use client'
import { fetchData } from '@/redux/fetchData'
import { useAppDispatch } from '@/redux/hooks/redux'
import Image from 'next/image'
import {useDispatch} from 'react-redux'
export default function Home() {
  const dipatcher = useAppDispatch()
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className='max-w-md bg-gray-600 p-3 flex flex-col justify-between gap-2'>
      <div className='flex justify-between gap-2'>
        <input className='bg-gray-500' />
        <button onClick={()=> dipatcher(fetchData({query:"war",total:1,sortBy:"newest"}))} className='bg-green-600 p-2'>Поиск</button>
      </div>
      <div className='text-black flex gap-4'>
        <select >
          <option>Сначала новые</option>
          <option>Сначала старые</option>
        </select>
        <div className='flex flex-col'>

        <label className='text-gray-400' htmlFor='num'>Колиичество статей</label>
        <select id='num'>
          {new Array(20).fill(0).map((_,i)=>(
            <option key={i}>{i}</option>
            ))}
        </select>
        </div>
      </div>
     </div>
    </main>
  )
}
