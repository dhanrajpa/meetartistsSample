//login functanility 
const loginUser=async(request,response)=>{
    const emailId=request.body.email;
    const password1=request.body.password;
    const data=await UserNameEmail.findOne({where:{email:emailId}})
    console.log(data)
    if(data.email==emailId && data.password==password1)
    {
        response.send("email password matches..!")
    }
    else{
        response.send("No matches found..!")
    }   

}
//password must be encrypted


//findUser

//connect one to many relation product and review
const getUserData=async(request,response)=>{
    const id=request.params.id;
    const data=await UserNameEmail.findOne({
        include:[{
            model:UserData,
            as:"userData"
        }],
        where:{id:id}
    })
    response.status(200).send(data)
}
module.exports={
    getUserData,
    addUserData,
    loginUser
}


// useremailpassword create method
// const UserEmailPassword = {
//     email: req.body.email,
//     password: req.body.password,
    
//   };

//   // Save Tutorial in the database
//   UserEmailPassword.create(userEmailPasswords)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//     res.send(err.message);
//       });
   



//usercontroller.js
const emailSend = async(req,res) =>{
    let data=await USER.findOne({email:req.body.email});
    const responseType = {};
    if(data){
        let otpcode = Math.floor((Math.random()*10000)+1);
        let otpData= new Otp({
            email:req.body.email,
            code:otpcode,
            expireIn: new Date().getTime()+300*1000
        })
        let Otpresponse=await otpData.save();
        responseType.statusText = 'Success'
        responseType.message ='Plesae check your email id:';
    }
    else{
        responseType.statusText='error'
        responseType.message='Email id doesnot exist';
    }

    res.status(200).json(response);
}

//const mailer=(email,otp)=>{





//reset password--email input


const changepassword = async (req,res)=>{
    let data=await USER.findOne({email:req.body.email});
    const responseType = {};
    if(data){
        let currentTime=new Date().getTime();
        let diff=data.expireIn - currentTime;
        if(diff < 0){
            response.message='Token Expire'
            response.statusText='error'
        } 
        else{
            let user =await user.findOne({email:req.body.email})
            user.password = req.body.password;
            user.save();
            response.message='Password changed successfully'
            response.statusText='success';
        }
        else{
            response.message='invalid otp'
            response.statusText='error'
        }
res.status(200).json(response);
    }
    const mailer=(email,otp)=>{

    }
    }


