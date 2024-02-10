const users=require('./userschema')
const jwttoken=require('jsonwebtoken')

exports.registerUser=async(req,res)=>
{
    // console.log('user controller');
    // res.status(200).json('received')
    const {username,useremail,userpassword}=req.body
    try {
        const alreadyuser=await users.findOne({useremail})
        if(alreadyuser)
        {
            res.status(406).json('User already exist')
        }
        else
        {
            const newuser=new users({
                username,
                useremail,
                userpassword
            })
            await newuser.save()
            res.status(200).json(newuser)
        }
    } catch (error) {
        res.status(401).json(`Request failed due to ${error}`)
    }
}

exports.userlogin=async(req,res)=>
{
    // console.log('inside login controller');
    // res.status(200).json('login request recieved')
    const{useremail,userpassword}=req.body
    try {
       const alreadyuser=await users.findOne({useremail,userpassword})

       if(alreadyuser){
        const token=jwttoken.sign({userid:alreadyuser._id},"krishnasecretkey")
        res.status(200).json({alreadyuser,token})
       } 
       else
       {
        res.status(404).json('Invalid email or password')
       }
    } catch (error) {
        res.status(401).json(`Request failed due to ${error}`)
    }
}

