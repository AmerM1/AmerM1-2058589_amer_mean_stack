// load the express module 
let express = require("express");
let router = express.Router();
let chatController = require("../controller/chatLog.controller")

router.post("/save",chatController.chatSmsg);


module.exports=router;