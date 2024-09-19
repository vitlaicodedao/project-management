import { aside, button5, heading2Aside, li } from "../tailwind-config";
import Button from "./Button";

const ProjectsSidebar = ({
  onStartAddProject,
  onSelectProject,
  projects,
  selectedProjectId,
}) => {
  return (
    <aside className={aside}>
      <h2 className={heading2Aside}>Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = button5;
          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li className={li} key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
