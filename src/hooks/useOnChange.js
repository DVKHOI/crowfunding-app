import { debounce } from "lodash";
import { useState } from "react";

export default function useOnChange(time = 0) {
  const [value, setValue] = useState(null);

  const handleChange = debounce((event) => {
    setValue(event.target.value);
  }, time);
  return [value, handleChange];
}
