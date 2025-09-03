exports.adminRegister= (req,res)=>{
    console.log(req.body)
    res.status(300).send({message:'Register'})
}
exports.adminLogin= (req,res)=>{
    console.log(req.body)
    res.status(300).send({message:'Login'})
}
exports.userLogin = (req,res)=>{
    console.log(req.body)
    res.status(200).send({message:'User login'})
}
exports.userRegister =(req,res)=>{
    console.log(req.body);
    res.status(201).send({message:'User Created'});
}