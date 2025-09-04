const express = require("express")
const app = express()
require('dotenv').config()
app.use(express.json())//middleware
const adminRouter = require('./router/adminRoute');
const userRouter = require('./router/userRoutes');
const paymentRouter = require('./router/paymentRoutes');
const {ConnectDB}= require('./utils/dbConnector');
 ConnectDB();
app.use('/payment',paymentRouter);
app.use('/api/admin',adminRouter);
app.use('/api/user',userRouter);
app.listen(process.env.PORT,()=>{
    console.log("App is running ");
   
})