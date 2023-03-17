// Importing Table model
const TableModel=require('../models/todo_task')

module.exports.home=function(req,res){
    res.send('<h1> hello chutiya jokhendra randa bhasri</h1>')
}

module.exports.about=function(req,res){
    res.send("<h1>My home is bihar</h1>")
}