var taskList = (function(){
  'use strict';
  let tasks = [];
  let taskID = 0
  return { addTask: function(task){
    task.id = taskID;
    taskID++;
    tasks.push(task);
    console.log(tasks);
    }
    

  }
})();


export default taskList 