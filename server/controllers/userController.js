const EmployeeData=require('../models/User')

const Signup=(req,res)=>{

    EmployeeData.create(req.body)
    .then((user)=>res.json(user))
    .catch(err=>console.error(err))


}

const Login=(req,res)=>
{


const{name,password}=req.body;

EmployeeData.findOne({name})
.then(user=>{
    
    if(user)
    {
        if(user.password===password)
        {
            res.json('success')
        }
        else{
            res.json('password is incorrect')
        }
    }

    else
    {
        res.json('user not found!!!')
    }
})
.catch(err=>console.log(err));


}

module.exports={Signup,Login};