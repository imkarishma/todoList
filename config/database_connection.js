const mongoose =require('mongoose')

async function dataBase_connection(){
    await mongoose.connect("mongodb://127.0.0.1:27017/user").then(conn=>{
        console.log(`Data base connected successfully!!`);
    }).catch(err=>{
        console.log(`Something went wrong while database connection ${err.message}`);
    })
}

module.exports=dataBase_connection;