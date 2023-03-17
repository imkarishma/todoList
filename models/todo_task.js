const mongoose=require('mongoose')
const Table_Schema=new mongoose.Schema({
    discription:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    Duedate:{
        type:String,
        required:true,

    }

})
const Table=mongoose.model('todo',Table_Schema);
module.exports=Table;