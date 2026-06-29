
import { useState } from "react";

type TaskProps = {
    tasks: string[],
    handleDeleteTask: (index: number) => void;
}

const TaskCards = ({tasks, handleDeleteTask }: TaskProps) => {
    return(
        <div>

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

export default TaskCards;