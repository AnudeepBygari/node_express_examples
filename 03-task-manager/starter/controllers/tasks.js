const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const createCustomError = require('../errors/custom-error');

const getTask = asyncWrapper(async (req, res) => {
  // try {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  res.status(201).json({ task });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
});

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(201).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  // try{
  const task = await Task.create(req.body);
  res.status(201).json({ task });
  // }catch(error){
  //     res.status(500).json({msg:error})
  // }
});

const updateTask = asyncWrapper(async (req, res) => {
  // try {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ task });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
  // } catch (error) {
  //     res.status(500).json({msg : error})
  // }
});

const deleteTask = asyncWrapper(async (req, res) => {
  // try {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
  res.status(200).json({ task });
  // }catch (error) {
  //     res.status(500).json({msg : error})
  // }
});

const editTask = (req, res) => {
  res.send("editTask from controller tasks file");
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
};
