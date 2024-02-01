module.expores = (req,res,next)=>{
    res.status(404).json({msg:'resource not found'})
}