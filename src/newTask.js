class Task {
  constructor(title="",description='',dueDate='',priority='', complete=false, id = -1, project="default") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority
    this.complete = complete
    this.id = id
    this.project = project
  }
}



export default Task