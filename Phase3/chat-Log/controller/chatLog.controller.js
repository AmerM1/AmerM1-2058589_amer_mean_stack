let chatLogModel = require("../model/chatLog.model");

let chatSmsg = (request,response)=> {
    let chat = request.body;

    chatLogModel.insertMany(chat,(err,result)=> {
        if(!err){
                response.send("Record stored successfully")
        }else {
                response.send(err);
        }
    })
}

module.exports= {chatSmsg}

