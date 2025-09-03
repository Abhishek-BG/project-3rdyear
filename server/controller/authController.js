const {prisma} = require('../middleware/dbConnect');
exports.adminRegister= async (req,res)=>{
    const {name,email,role,pass} = req.body
    try{
    const User = await prisma.User.create({
        data:{
            name,
            email,
            role,
            password:pass
        }
    });
    res.json(User);
}catch(err){
   console.log(err); 
    res.status(500).json({ error: "Something went wrong" });
}}
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