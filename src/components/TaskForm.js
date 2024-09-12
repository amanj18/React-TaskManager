import React, { useState } from "react";
import "../styles/TaskForm.css"
import { MdOutlineAddCircle } from "react-icons/md";

const TaskForm = ({ addTask }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTask(text);
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                className="task-input"
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a new task"
                required
            />
            <button type="submit"><MdOutlineAddCircle /></button>
        </form>
    );
};

export default TaskForm;
