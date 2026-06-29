
import { useState, useEffect, useRef } from "react";

const ToDoList = () => {

    const [tasks, setTasks] = useState<string[]>(["take a bath", "water"]);
    const [newTask, setNewTask] = useState<string>("");


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
                <input type="text" value={newTask} onChange={handleInputChange}/>
                <button onClick={handleAddTask}>Add Task</button>
            </div>


            <div>
                <ol className="list-container">
                    {tasks.map((task, index) => (
                        <li key={`${task}, ${index}`}>
                            {task}
                            <button>Task Completed</button>
                            <button onClick={() => handleDeleteTask(index)}>X</button>
                        </li>
                    ))}
                </ol>


            </div>
            
        </div>
    );
}

export default ToDoList;