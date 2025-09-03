const express = require("express")
const app = express()
const {connectDB} = require('./middleware/dbConnect')
require('dotenv').config()
app.use(express.json())//middleware
connectDB()

const adminRouter = require('./router/adminRoute');
const userRouter = require('./router/userRoutes');
const exampleRouter = require('./router/exampleRouter');

app.use('/api/v1',exampleRouter);
app.use('/api/admin',adminRouter);
app.use('/api/user',userRouter);
app.listen(process.env.PORT,()=>{
    console.log("App is running ");
})