import react from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate=useNavigate();
  const submithandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/register',{username,email,password})
    .then((res)=>{
        console.log(res.data)
        navigate('/login')
    })
    .catch((err)=>console.log(err))
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
        <h1 className="font-bold text-2xl">Sign up !</h1>
      <form className="flex flex-col gap-2"
       onSubmit={submithandler}>
        <div>Username</div> 
        <input 
        className="p-1 rounded-md border-2 border-gray "
        placeholder="Enter Username "
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div>Email</div>
        <input
         className="p-1 rounded-md border-2 border-gray"
         placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div>Password</div>
        <input
         className="p-1 rounded-md border-2 border-gray"
         placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button type="submit" className="bg-blue-700 text-bold rounded-md text-white px-20 py-2">Sign up</button>
        </div>
      </form>
      <div>Already Signup ? </div>
      <Link className="text-blue-700 font-bold px-20" to="/login" >login</Link>
    </div>
  );
}
