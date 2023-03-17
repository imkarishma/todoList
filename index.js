const express=require('express');
const app=express();
const port=8000;
const dataBase_connection=require('./config/database_connection');
dataBase_connection()

const TableModel=require('./models/todo_task')

app.set("view engine","ejs")
app.use(express.static('static'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// Importing all route from router folder

const home=require('./routes/home_router')


const contactlist=[{
    des:"coading",
    category:"work",
    date:"2023-03-19"
    },
    {des:"study",
    category:"school",
    date:"2025-03-19",

    },
    {
    des:"teching",
    category:"pesonal",
    date:"2025-05-4",
    }
]



// set middleware 

app.get('/about',async(req,res)=>{
    let tasklist=await TableModel.find()
    
    res.render("home.ejs",{contactlist:tasklist})
});

app.delete('/delete-task',(req,res)=>{
    const {ids}=req.body;
    ids.forEach(async (ele) => {
        await TableModel.findByIdAndDelete(ele)
    });
    res.json({
        success:true,
        msg:"Deleted successfully!"
    })
    
})

app.post('/create',async(req,res)=>{
    const {des,date,category}=req.body;
    if((des==undefined || date == undefined || category==undefined)||(des==''|| date==''|| category==''))
    {
        return res.redirect('/about')
    }else{
        const newTodoTask=new TableModel({
            discription:des,
            category:category,
            Duedate:date
        })
        await newTodoTask.save();
        return res.redirect('/about')
    }
});

app.listen(port,(err)=>{
    if(err){
        console.log(`server error ${err.message}`);
    }
    else{
        console.log("server is running");
    }
});

