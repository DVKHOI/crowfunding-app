import { useState } from "react";

export default function useToggleValue(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const handleShowValue = () => {
    setValue(!value);
  };
  return {
    value,
    handleShowValue,
  };
}
