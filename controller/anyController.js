const catchAsyncErorr = require("../middleware/catchAsyncErorr");
const anyModel = require("../model/anyModel");
 


// postanyData
exports.justPost = catchAsyncErorr(async (req, res, next) => {  
  
    const newAcc = await anyModel.create(req.body);
    res.status(201).json({
        satus: "ok",
        data: newAcc,
      });
  
}); 

// getData
exports.getData = catchAsyncErorr(async (req, res, next) => {  
  
    const newAcc = await anyModel.get({});
    res.status(201).json({
        satus: "ok",
        data: newAcc,
      });
  
}); 