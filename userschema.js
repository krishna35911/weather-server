const mong=require('mongoose')

const userschema=new mong.Schema({
    username:{
        type:String,
        require:true
    },
    useremail:{
        type:String,
        require:true
    },
    userpassword:{
        type:String,
        require:true
    }
})

const user=mong.model("user",userschema)

module.exports=user