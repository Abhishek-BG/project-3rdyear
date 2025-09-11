const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.verifyAdmin = (req,res,next)=>{
    const authHeader = req.headers["authorization"];
    console.log(authHeader);
    if(!authHeader) return res.status(401).send({message:'Authorization Failed'});
    const tokenData = jwt.decode(authHeader,process.env.JWT_SECRET_TOKEN);
    if(!tokenData) return res.status(403).send({message:'Invalid Token'});
    if(tokenData.role !== 'admin') return res.status(403).send(
        {message:'Access Denied'});
    next();
}

