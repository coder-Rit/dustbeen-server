const express = require('express')
const { getData, justPost } = require('../controller/anyController')
 
 

const Router = express.Router()

Router.route("/justPost").post(justPost) 
Router.route("/get").get(getData) 
 
 

module.exports =Router