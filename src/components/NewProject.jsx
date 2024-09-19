import Input from "./Input";
import React from "react";
import {
  div1,
  menu,
  button2,
  button3,
  heading2,
  paragraph2,
} from "../tailwind-config";
import Modal from "./Modal";

const NewProject = ({ onCancelAddProject, onAddProject }) => {
  const titleRef = React.useRef();
  const descriptionRef = React.useRef();
  const dueDateRef = React.useRef();

  const modal = React.useRef();

  const handleAddProject = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAddProject({ title, description, dueDate });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className={heading2}>Invalid input</h2>
        <p className={paragraph2}>
          Oops... looks like you forgot to enter a value.
        </p>
        <p className={paragraph2}>
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className={div1}>
        <menu className={menu}>
          <li>
            <button onClick={onCancelAddProject} className={button2}>
              Cancel
            </button>
          </li>
          <li>
            <button
              type="submit"
              onClick={handleAddProject}
              className={button3}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label="Title" type="text" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input ref={dueDateRef} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
