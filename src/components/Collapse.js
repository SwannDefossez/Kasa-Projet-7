import React, { useState, useRef } from "react";
import Up from "../assets/images/up.png"
import Down from "../assets/images/down.png"

const Collapse = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  return (
    <div className="collapse">
      <span className="collapse__label">
        <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
          {props.label}
          {isOpen === true ? (
            <img src={Up} />
          ) : (
            <img src={Down} />
          )}
        </div>
      </span>
      <div
        className="content-parent"
        ref={parentRef}
        style={
          isOpen
            ? {
                height: parentRef.current.scrollHeight + "px",
              }
            : {
                height: "0px",
              }
        }
      >
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Collapse;
