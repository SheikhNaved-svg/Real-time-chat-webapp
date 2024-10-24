import react from 'react';
import { Link } from "react-router-dom";
export default function Join(){
    return(
        <div className='flex flex-col  justify-center items-center h-screen'>
        <h1 className='underline font-bold text-blue-700 text-7xl'>Chatify</h1>
        
        <Link className='bg-blue-700 text-xl mt-5 hover:bg-blue-600 p-2 text-white font-bold rounded-lg' to='/signup'>lets chat</Link>
        
        
        </div>
    )
}