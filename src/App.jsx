import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoSelectedProject from "./components/NoSelectedProject";
import { main } from "./tailwind-config";

import { useState } from "react";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleSelectProject = (id) => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  };

  const handleStartAddProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleCancelAddProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const handleAddProject = (project) => {
    const newProject = {
      ...project,
      id: Math.random(),
    };
    setProjectState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, newProject],
      selectedProjectId: undefined,
    }));
  };

  const handleDeleteProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  };

  const handleAddTask = (task) => {
    const newTask = {
      task: task,
      projectId: projectState.selectedProjectId,
      id: Math.random(),
    };
    setProjectState((prevState) => ({
      ...prevState,
      tasks: [newTask, ...prevState.tasks],
    }));
  };

  const handleDeleteTask = (id) => {
    setProjectState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      tasks={projectState.tasks.filter(
        (task) => task.projectId === projectState.selectedProjectId
      )}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onCancelAddProject={handleCancelAddProject}
        onAddProject={handleAddProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoSelectedProject onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className={main}>
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
