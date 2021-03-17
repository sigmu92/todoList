import Task from "./newTask.js"

let Tasklist = []

const newTaskInputs = document.querySelectorAll("input")


function genArr(){
  let arr = []
  newTaskInputs.forEach(input => {
    arr.push(getData(input))
  })
}

function getData(input){
  const data = input.value
  input.value = ""
  return data
}

Tasklist.push(new Task(document.getElementById("add-task").addEventListener("click", genArr)))


