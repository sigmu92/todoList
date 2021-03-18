import Task from "./newTask.js"
import taskList from "./taskList.js"



const newTaskInputs = document.querySelectorAll(".tasks")




function genArr(){
  let arr = []
  newTaskInputs.forEach(input => {
    arr.push(input.firstElementChild.value)
    input.firstElementChild.value = ''
  })
  return arr
}

function newTask(){
  const task = new Task(...genArr())
  taskList.addTask(task)
}

document.getElementById("add-task").addEventListener("click", newTask)


