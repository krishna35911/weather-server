require('dotenv').config()

const express=require('express')

const cors=require('cors')

const route=require('./router')

require('./dbconnection')

const weatherdataServer=express()

weatherdataServer.use(cors())

weatherdataServer.use(express.json())

weatherdataServer.use(route)

const portnumber = 4000 || process.env.portnumber

weatherdataServer.listen(portnumber,()=>
{
    console.log(`server at port number ${portnumber}`);
})