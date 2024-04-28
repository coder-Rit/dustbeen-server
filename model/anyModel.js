const mongoose = require("mongoose");
 

const anySchema = new mongoose.Schema({
    dustType:{
        type:String
    },
    madeAt:{
        type:Number,
        default:Date.now()
    }

});
 
module.exports = mongoose.model("any", anySchema);
