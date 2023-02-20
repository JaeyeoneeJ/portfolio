import React from "react";
import ReactDOM from "react-dom";

const ProjectPortal = ({ children }: { children: React.ReactNode }) => {
  const modalRoot = document.getElementById("modal-project") as HTMLDivElement;
  return ReactDOM.createPortal(children, modalRoot);
};

export default ProjectPortal;
