import {
  button6,
  div1,
  div4,
  div5,
  header,
  heading1,
  paragraph5,
  paragraph6,
} from "../tailwind-config";
import Tasks from "./Tasks";

const SelectedProject = ({
  project,
  tasks,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className={div4}>
      <header className={header}>
        <div className={div5}>
          <h1 className={heading1}>{project.title}</h1>
          <button className={button6} onClick={onDeleteProject}>
            Delete
          </button>
        </div>
        <p className={paragraph5}>{formattedDate}</p>
        <p className={paragraph6}>{project.description}</p>
      </header>
      <Tasks onAddTask={onAddTask} tasks={tasks} onDeleteTask={onDeleteTask} />
    </div>
  );
};
export default SelectedProject;
