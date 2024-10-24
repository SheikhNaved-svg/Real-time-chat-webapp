import mongoose from 'mongoose'

const chatSchema= new mongoose.Schema({
    chat:{
        type:String,
        required:true,
        
    },
   
})
const Chat= mongoose.model("Chat",chatSchema);
export default Chat;