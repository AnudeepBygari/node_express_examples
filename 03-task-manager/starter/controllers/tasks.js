

const Task = require('../models/Task')

const getAllTasks= (req , res ) => {
    res.send('all items from controller tasks file')
}

const createTask= async (req , res ) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
    
}

const updateTask= (req , res ) => {
    res.send('updateTask from controller tasks file')
}

const deleteTask= (req , res) => {
    res.send('deleteTask from controller tasks file')
}

const getTask= (req , res) => {
    res.json({id:req.params.id})
}

const editTask= (req , res) => {
    res.send('editTask from controller tasks file')
}
module.exports= {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask,
} 