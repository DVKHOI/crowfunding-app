import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const Input = (props) => {
  const {
    name,
    type = "text",
    control,
    placeholder = "",
    error = "",
    children,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        autoComplete="off"
        id={name}
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium border rounded-lg  dark:text-white   placeholder:text-text4  bg-transparent dark:placeholder:text-text2 ${
          error.length > 0
            ? "border-error text-error"
            : "border-strockSoft text-text1 dark:border-darkStroke"
        } ${children ? "pr-16" : ""}`}
        placeholder={error.length <= 0 ? placeholder : ""}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="absolute font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
          {error}
        </span>
      )}
      {children && (
        <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
          {children}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
