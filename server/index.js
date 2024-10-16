const express = require('express');
const cors=require('cors')

const connectDB=require('./databases/db')
const userRoutes=require('./Routes/userRoutes');
connectDB()

const app=express()
app.use(cors())
app.use(express.json())



app.use('/user',userRoutes)

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});









