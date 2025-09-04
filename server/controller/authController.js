const {prisma }= require('../utils/dbConnector');
exports.adminRegister= async (req,res)=>{
    const {name,role,email,pass} = req.body
    try{
    const UserData  = await prisma.User.create({
        data:{
            name,
            email,
            role,
            password:pass
        }
    });
    res.status(201).send({message:'created admin',status:true,data:UserData})
    }catch(err){
       res.status(204).send({message:err,status:false})
    }
    
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