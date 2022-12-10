import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Textarea = (props) => {
  const { name, control, placeholder = "", children, ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      id={name}
      className="w-full px-6 py-4 text-sm font-medium bg-transparent border rounded-lg dark:text-white placeholder:text-text4
       dark:placeholder:text-text2 resize-none min-h-[141px]"
      placeholder={placeholder}
      {...rest}
      {...field}
    ></textarea>
  );
};

Textarea.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
export default Textarea;
