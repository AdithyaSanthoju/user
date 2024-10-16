const mongoose =require('mongoose')

const registerSchema=new mongoose.Schema({

name:String,
password:String,
email:String

})

const EmployeeData=mongoose.model('Employee',registerSchema)
module.exports=EmployeeData