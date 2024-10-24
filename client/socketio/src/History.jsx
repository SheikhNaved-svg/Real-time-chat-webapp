import react from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios'
export default function History(){
    const[data,setData]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/getchat').then((res)=>{
            setData(res.data)
            console.log(res)}).catch((err)=>console.log(err))
    })
    return(
        <div className='flex flex-col items-center '>
        <h1 className='text-white bg-blue-700 p-2 rounded-lg font-bold text-2xl border-2 border-gray'>History</h1>
        <div className='bg-gray-200 p-2'>
        {data.map((item)=>(
                <div>{item.chat}</div>
        ))}
        </div>
        </div>
    )
}