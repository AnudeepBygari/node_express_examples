const getAllTasks= (req , res ) => {
    res.send('all items from controller tasks file')
}

const createTask= (req , res ) => {
    console.log('createTask log ');
    res.json(req.body)
}
// const createTask= (req , res ) => {
//     console.log('createTask log ');
//     res.send('create task')
// }

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