const asyncHandler=(requestHandler)=>{
     (err,req,res,next)=>{
        Promise.resolve(requestHandler(err,req,res,next))
        .catch((err)=>next(err))
     }
}





/*
const  asyncHandler =(fn)=>{  //HOF
 async (err,req,res,next)=>{
    try{
       await fn(err,req,res,next);
      }catch(err){
        res.status(err.code || 500).json({
            success:false,
            message:err.message
        })
      }
 }
}
*/


export {asyncHandler}