import { aside, button5, heading2Aside, li } from "../tailwind-config";
import Button from "./Button";

const ProjectsSidebar = ({ onStartAddProject, projects }) => {
  return (
    <aside className={aside}>
      <h2 className={heading2Aside}>Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li className={li} key={project.id}>
            <button className={button5}>{project.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
