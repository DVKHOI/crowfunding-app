import React from "react";
import { useDropdown } from "./dropdown-context";

const Search = ({ placeholder, ...props }) => {
  const { onChange } = useDropdown();
  return (
    <div className="sticky top-0 p-2">
      <input
        type="text"
        placeholder={placeholder}
        className="z-20 w-full p-2 border border-gray-200 rounded outline-none "
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Search;
