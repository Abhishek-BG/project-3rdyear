const {prisma} = require('../utils/dbConnector');
exports.getAllUsers = async(req,res) =>{
    try{
        const Data = await prisma.User.findMany({where:{role:'user'}});
        res.status(200).send({status:true,data:Data});
    }catch(err){
         
         res.status(400).send({status:false,message:err});
    }

}