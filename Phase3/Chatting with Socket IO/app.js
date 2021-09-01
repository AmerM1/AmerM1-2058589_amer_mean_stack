const { time } = require("console");
let express= require("express");
let app= express();
let http=require("http").Server(app);
let io= require("socket.io")(http);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/chat.html")
})

io.on("connection", (socket)=>{
    let messageCounter = 0
    console.log("client connected");
    socket.on("obj",(msg)=>{
        console.log(msg);
    })

    socket.emit("obj1","server : Welcome to chat Bot, how may I help You? ")
    
    // socket.emit("obj3",Date())

    const wecomeMessages = ["how may I help you?", "ok, our chat bot team will be handeling it shortly","Please be patient"]

    socket.on("obj3",(msg)=>{
        messageCounter += 1
        socket.emit("obj3",Date())
        if (messageCounter === 1) {
            socket.emit("obj3","Ok, our chat bot team will be handeling it shortly?")
        } else {
            socket.emit("obj3","Please be patient, we will get back to you Shortly.Thank You.")
        }
        console.log("Client say: "+msg);
        console.log("server say: "+Date());

    })

})
http.listen(3500,()=>console.log("server running in port number 3500"))

