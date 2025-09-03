const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const connectDB = async()=>{
    try{
        await prisma.$connect();
        console.log("Connected");
    }catch(err){
        console.log(err);
    }
}
module.exports ={connectDB,prisma}
