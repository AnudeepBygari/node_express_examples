// //express

// const express = require('express')
// const app = express()
// const port = process.env.PORT || 5000;
// const start = async () => {
//     try{
//         app.listen(port,console.log(`Server is listening on port ${port} `))
//     }catch(error){
//         console.log(error);
//     }
// }

// start()


const express = require('express')
const router = express.Router()
console.log('iiiiiiii');
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
