
import { useState, useEffect } from "react";
import TaskCards from "./TaskCards.tsx";

const ToDoList = () => {

    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState<string>("");


    //This is to show a similar notification of how many tasks are left on the tab
    useEffect(() => { 
        document.title = `Tasks: (${tasks.length})`;
    }, [tasks]);



    const handleAddTask = () => {
        setTasks(prevTask => [...prevTask, newTask]);
        setNewTask("");

    }

    const handleDeleteTask = (index: number) => {
        setTasks(tasks.filter((_, i) => (
            i !== index
        )));
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    }

    return(
        <div className="main-container">

            <div className="task-bar">
                <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter a task..."/>
                <button onClick={handleAddTask}>Add Task</button>
            </div>

            
            <TaskCards className="card-style" tasks={tasks} handleDeleteTask={handleDeleteTask} />
            
        </div>
    );
}

export default ToDoList;