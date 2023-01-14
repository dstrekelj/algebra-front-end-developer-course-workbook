import "../styles/Paragraph.css";
import React from "react";

export function Paragraph(props) {
  return React.createElement(props.element, { className: "Paragraph" }, props.children);
}
