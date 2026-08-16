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

export function reverseFull(id, setTask) {
        const oldTask = takeTask();
        const taskfullreverse = oldTask.map(
                (taskNow) => {
                        if(taskNow.id == id){
                                taskNow.full = !taskNow.full
                                return taskNow;
                        } else {
                                return taskNow;
                        }
                }
        )
        setTask(taskfullreverse)
        const taskUpdated = JSON.stringify(taskfullreverse)
        localStorage.setItem("task", taskUpdated);
}

export function ReverseStar(id, setTask){
        const oldTask = takeTask();
        const taskStarReverse = oldTask.map(
                (taskNow) => {
                        if (taskNow.id == id) {
                                taskNow.star = !taskNow.star
                                return taskNow;
                        } else {
                                return taskNow;
                        }
                }
        )
        setTask(taskStarReverse);
        const taskUpdated = JSON.stringify(taskStarReverse)
        localStorage.setItem("task", taskUpdated)
}

export function deleteTask(id, setTask){
        const oldTask = takeTask();
        const taskDelete = oldTask.filter(
                (taskNow) => {
                        const condicion = (taskNow.id != id)
                        return condicion;
                }
        )
        setTask(taskDelete);
        const taskUpdated = JSON.stringify(taskDelete)
        localStorage.setItem("task", taskUpdated)
}
