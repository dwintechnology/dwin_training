import React from "react";

const Check = ({ id, type, name, handleClick, isChecked }) => {
  return (
    <input
      key={id}
      id={id}
      name={name}
      type={type}
      onChange={handleClick}
      checked={isChecked}
    />
  );
};

export { Check };
