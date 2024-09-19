import React from "react";
import { button6, div2, input2 } from "../tailwind-config";

const NewTask = ({ onAddTask }) => {
  const task = React.useRef();
  const addTaskHandler = () => {
    const taskName = task.current.value;
    if (taskName.trim() === "") {
      return;
    }
    onAddTask(taskName);
    task.current.value = "";
  };
  return (
    <div className={div2}>
      <input ref={task} type="text" className={input2}></input>
      <button className={button6} onClick={addTaskHandler}>
        Add Task
      </button>
    </div>
  );
};
export default NewTask;
