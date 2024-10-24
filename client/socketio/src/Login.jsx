import react from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";
export default function Login() {
  const [username, setUsername] = useState("");
  
  const [password, setPassword] = useState("");
    const navigate= useNavigate();
  const submithandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/logindata',{username})
    .then((res)=>{console.log(res.data)
        navigate('/chat')
    })
    .catch((err)=>console.log(err))
  };
  return (
    <div  className="flex flex-col justify-center items-center h-screen">
        <h1 className="font-bold text-2xl ">Login !</h1>
      <form
      className="flex flex-col gap-2"
       onSubmit={submithandler}>
        <div>Username</div>
        <input
         className="p-1 rounded-md border-2 border-gray "
         placeholder="Enter Username "
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
         <div>Password</div>
        <input
         className="p-1 rounded-md border-2 border-gray "
         placeholder="Enter Email "
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button className="bg-blue-700 text-white font-bold px-20 py-2 rounded-md" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
