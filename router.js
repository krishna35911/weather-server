const express=require('express')

const usercontroller=require('./usercontroller')

const admincontroller=require('./admincontroller')

const route=new express.Router()

route.post('/register',usercontroller.registerUser)

route.post('/login',usercontroller.userlogin)

route.post('/admin/register',admincontroller.adminregister)

route.post('/admin/login',admincontroller.adminlogin)


module.exports=route