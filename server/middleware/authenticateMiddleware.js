exports.verifyAdmin = (req,res,next)=>{
    if(req.body.token){
    console.log('REq triggered from',req.path);
    console.log(req.body.token);
    next();
    }else{
        res.status(403).send({message:'AUth Failed'});
    }
    
    
}

