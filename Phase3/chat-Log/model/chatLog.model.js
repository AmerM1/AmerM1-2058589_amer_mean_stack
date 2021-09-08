// load the module 
let mongoose = require("mongoose")

mongoose.pluralize(null);       
// create the schema 
let chatSchema = mongoose.Schema({
    _id : Number,
    name : String,
    message : String
});

 
let chatLogModel = mongoose.model("ChatMsgs",chatSchema);

module.exports=chatLogModel;   