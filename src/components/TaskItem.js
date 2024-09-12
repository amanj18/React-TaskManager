import React from "react";
import "../styles/TaskItem.css";
import { MdDelete } from "react-icons/md";

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
    return (
        <div className={`task-item ${task.completed ? "completed" : ""}`}>
            <input
                type="checkbox"
                className="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
            />
            <span
            className="task-text"
                onClick={() => toggleComplete(task.id)}
                style={{ textDecoration: task.completed ? "line-through" : "none" }}
            >
                {task.text}
            </span>
            <button className="del" onClick={() => deleteTask(task.id)}> <MdDelete /></button>
        </div>
    );
};

export default TaskItem;
