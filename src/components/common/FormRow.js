import React from "react";

const FormRow = ({ children, className = "" }) => {
  return (
    <div className={`grid grid-cols-2 gap-x-[25px] ${className}`}>
      {children}
    </div>
  );
};

export default FormRow;
