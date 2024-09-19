import {
  button7,
  heading2Tasks,
  li,
  paragraph7,
  ulTasks,
} from "../tailwind-config";
import NewTask from "./NewTask";

const Tasks = ({ onAddTask, tasks, onDeleteTask }) => {
  return (
    <section>
      <h2 className={heading2Tasks}>Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 && (
        <p className={paragraph7}>This project does not have any tasks yet.</p>
      )}
      {tasks.length > 0 && (
        <ul className={ulTasks}>
          {tasks.map((task) => (
            <li key={task.id} className={li}>
              <span>{task.task}</span>
              <button className={button7} onClick={() => onDeleteTask(task.id)}>
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
