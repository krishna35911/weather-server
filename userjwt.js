const userjwt=require('jsonwebtoken')

const users=require('./userschema')

const jwtmiddle=async(req,res,next)=>
{
    const tokenauthorisation=req.headers['authorization'];

    if(!tokenauthorisation)
    {
        return res.status(401).json('Token header not found')
    }

    const token=tokenauthorisation.split(' ')[1];
    console.log(token);

    try {
        const jwtresponse=userjwt.verify(token,'krishnasecretkey')
        const user=await users.findById(jwtresponse.userid)

        if(!user)
        {
            return res.status(401).json('no user')
        }
        req.payload={
            userid:jwtresponse.userid
        }
        next();
    } catch (error) {
        res.status(401).json('Failed')
    }
}
module.exports=jwtmiddle
