import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import Chat from "./models/models.js";
import User from "./models/user.js";
import mongoose from "mongoose";
import cors from 'cors'

const app = express();
const server = createServer(app);
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    method: ["GET", "POST"],
    credentials: true,
  },
});

const port = 3000;
mongoose.connect('mongodb://127.0.0.1:27017/chat').then(()=>console.log('db connected')).catch((err)=>console.log(err))
app.get("/", (req, res) => {
  res.send("yes ready ");
});
app.post('/chatsave', async(req,res)=>{
  const {message}=req.body
  console.log(message)
  const result= await Chat.create({
    chat:message,
    
  })
  res.json(result)
})
app.get('/getchat', async(req,res)=>{
  const result= await Chat.find({});
  res.json(result)
})
app.post('/register', async(req,res)=>{
  const {username,email,password}=req.body;
  
  const result= await User.create({
  username:username,
  email:email,
  password:password
  })
  res.json(result)



})
app.post('/logindata', async (req,res)=>{
  const {username}=req.body;
  if(!username)return
  const result= await User.findOne({username})
  res.json(result)
})
io.on("connection", async(socket) => {
  console.log("socket connected");
  

  socket.on("sock", (data) => {
    if(!data.message) return
    io.to(data.room).emit("msg", data.message);
     
  });

  socket.on("join-room",(s)=>{
    console.log(s)
    socket.join(s)
  })
});

server.listen(port, (req, res) => {
  console.log("port ready");
});
