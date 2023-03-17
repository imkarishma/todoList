const express=require('express')
const route=express.Router();
const Home_Controller=require('../controllers/home_controller')


route.get('/',(req,res)=>{
    Home_Controller.home(req,res);
})

route.get('/about',(req,res)=>{
    Home_Controller.about(req,res)
})

module.exports=route;