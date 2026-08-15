export function takeTask(){
    return(
            JSON.parse(localStorage.getItem("task")) || []
    )
}

export function addTask(task){
        const oldTask = takeTask();
        const oldTaskNewTask = [...oldTask, task]
        const newTask = JSON.stringify(oldTaskNewTask)
        localStorage.setItem("task", newTask)
}