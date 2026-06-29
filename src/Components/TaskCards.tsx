
import { useState } from "react";

type TaskProps = {
    tasks: string[],
    handleDeleteTask: (index: number) => void,
    className?: string,
}

const TaskCards = ({tasks, handleDeleteTask, className }: TaskProps) => {
    return(
        <div>
            <ol className={className}>
                {tasks.map((task, index) => (
                    <li key={`${task}, ${index}`}>
                        {task}

                        <button>Task Completed</button>
                        <button onClick={() => handleDeleteTask(index)}>X</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TaskCards;