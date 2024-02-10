const mongoose=require('mongoose')


const adminschema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    adminemail:{
        type:String,
        require:true
    },
    adminpassword:{
        type:String,
        require:true
    }
})

const admin=mongoose.model("admin",adminschema)

module.exports=admin