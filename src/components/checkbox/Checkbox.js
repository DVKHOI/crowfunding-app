import React from "react";

const Checkbox = ({
  checked = false,
  name = "",
  children,
  onClick = () => {},
}) => {
  return (
    <div className="flex justify-start gap-x-5">
      <div
        className={` inline-flex justify-center items-center p-1 text-white  w-5 h-5 border rounded border-text2 ${
          checked
            ? "bg-primary border-primary"
            : " border-text2 dark:border-text3"
        }`}
        onClick={onClick}
      >
        <input
          type="checkbox"
          className="hidden"
          name={name}
          onChange={() => {}}
        />

        <span className={`${checked ? "" : "opacity-0 invisible"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      {children && (
        <label className="cursor-pointer" onClick={onClick}>
          {children}
        </label>
      )}
    </div>
  );
};

export default Checkbox;