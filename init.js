const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection success");
})
.catch((err)=>console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chats');
}

let allChats = [
    {
       from: "neha",
       to: "preeti",
       msg: "send me notes for exam",
       created_at: new Date(), 
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "bndi mili?",
        created_at: new Date(), 
     },
     {
        from: "amit",
        to: "sumit",
        msg: "exam khtm bro chlo ghumne",
        created_at: new Date(), 
     },
     {
        from: "anita",
        to: "aryan",
        msg: "bring protection",
        created_at: new Date(), 
     },
     {
        from: "tony",
        to: "peter",
        msg: "mai mra nhi hu av bache",
        created_at: new Date(), 
     },
];

Chat.insertMany(allChats);

