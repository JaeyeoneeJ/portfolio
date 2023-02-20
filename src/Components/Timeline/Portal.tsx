import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }: { children: React.ReactNode }) => {
  const modalRoot = document.getElementById("modal-img") as HTMLDivElement;
  return ReactDOM.createPortal(children, modalRoot);
};

export default Portal;
