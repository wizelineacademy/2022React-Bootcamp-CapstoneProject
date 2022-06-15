import React from "react";

const Group = ({ children }) => {
  return <div className="group">{children}</div>;
};

export const GroupTitle = ({ children }) => {
  return <div className="title">{children}</div>;
};

export const GroupBody = ({ children }) => {
  return <div className="body">{children}</div>;
};

export default Group;
