import React from "react";
import "./style.css";

const Notepage = (props) => {
  const {
    children,
    notepadHeaderColor = "#423830",
    notepadWidth = "600px",
    pageHeight = "60vh",
    setContent = () => {},
  } = props;
  return (
    <div
      className="notepad"
      style={{ background: notepadHeaderColor, maxWidth: notepadWidth }}
    >
      <div className="top" />
      <div
        className="page"
        contenteditable="true"
        style={{ minHeight: pageHeight }}
        onInput={(e) => {
          setContent(e.currentTarget.textContent);
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Notepage;
