const express=require('express');
const app=express();
const port=8000;
app.get('/about',(res,req)=>{
    req.send('hellow')
});
app.listen(port,(err)=>{
    if(err){
        console.log(`server error ${err.message}`);
    }
    else{
        console.log("server is running");
    }
});

