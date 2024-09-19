import React, { forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { dialog, form } from "../tailwind-config";
import Button from "./Button";

const Modal = forwardRef(function Modal({ buttonCaption, children }, ref) {
  const modal = React.useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={modal} className={dialog}>
      {children}
      <form method="dialog" className={form}>
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
