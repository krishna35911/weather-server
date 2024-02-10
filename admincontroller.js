const adminschema=require('./adminschema')
const jwt=require('jsonwebtoken')

exports.adminregister=async(req,res)=>
{
  const{username,adminemail,adminpassword}=req.body
    try {
      const newadmin=new adminschema({
        username,
        adminemail,
        adminpassword,
      })
      await newadmin.save()
      res.status(200).json(newadmin)
    } catch (error) {
      res.status(401).json(`${error}`)
    } 
}

exports.adminlogin=async(req,res)=>
{
  const {adminemail,adminpassword}=req.body

  const adminuser=await adminschema.findOne({adminemail,adminpassword})
  try {
    if(adminuser)
    {
      const admintoken=jwt.sign({adminid:adminuser._id},"krishnasecretkey")
      res.status(200).json({adminuser,admintoken})
    }
  } catch (error) {
    console.log(error);
  }
}