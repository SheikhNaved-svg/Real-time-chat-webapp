import { useEffect, useState, useMemo } from "react";
import { io } from "socket.io-client";
import axios from 'axios';
import {Link} from "react-router-dom"


function Chat() {
  const [message, setMessage] = useState("");
  const [recieved, setRecieved] = useState([]);
  const [sockets, setSocket] = useState();
  const [room,setRoom]=useState("");
  const [joinroom,setJoinroom]=useState('')
  const socket = useMemo(() => io("http://localhost:3000"), []);

  useEffect(()=>{

  },[])

  useEffect(() => {
    socket.on("connect", () => {
      setSocket(socket.id);
      console.log("connected");
      console.log(socket.id);
    });

    socket.on("msg", (data) => {
      console.log(data);
      setRecieved((recieved)=>[...recieved,data]);
      console.log(recieved)
    });
    /* return ()=>{
        socket.disconnect();
      }*/
  }, []);
  const clickhandler = (e) => {
    e.preventDefault();
    if(message==="") return
    socket.emit("sock", {message,room});
    setMessage('')

    axios.post('http://localhost:3000/chatsave',{message}).then((res)=>console.log(res)).catch((err)=>console.log(err))

    
  };

  const roomjoinHandler=(e)=>{
    e.preventDefault();
    socket.emit('join-room',joinroom)
    setJoinroom('')
  }
  return (
    <div className="flex flex-col  items-center h-screen">
    <div className="p-10">
        <div className="flex flex-row justify-between">
      <h1 className="text-blue-600 text-3xl font-bold">Chatify</h1>
      <div><Link to="/History">chat history</Link></div>
      </div>
      <h3><b>Id:</b> {sockets}</h3>

     {/*  <form onSubmit={roomjoinHandler}>
      <input 
      value={joinroom}
      onChange={(e)=>{
        setJoinroom(e.target.value)
      }}
       className="border-2 p-1 border-gray-400 rounded-md" />
    <button 
    type="submit"
    className="p-1 ml-1 bg-blue-500 text-white rounded-md"
    >join room</button>
    </form>*/}
      <form id="from" onSubmit={clickhandler}>
        <input
        className="border-2 p-1 border-gray-400 rounded-md"
        placeholder="message"
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />

        <input 
         className="border-2 p-1 border-gray-400 rounded-md"
         placeholder="Id"
        type="text"
        value={room}
        onChange={(e)=>{
          setRoom(e.target.value)
        }}
        />

        <button 
        className="p-1 ml-1 bg-blue-500 text-white rounded-md"
         type="submit">Send</button>
      </form>
      
      <div>
          {recieved.map((item)=>
            <div className="bg-gray-100 p-1 flex "><div className="bg-blue-400 w-7 h-7 ml-1 mr-1 rounded-full"><img className="w-7 h-7" src='https://cdn-icons-png.flaticon.com/512/149/149071.png' /></div>{item}</div>
          )}
      </div>
      </div>
    </div>
  );
}

export default Chat
