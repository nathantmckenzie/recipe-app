import React from "react";
import Slider from "@material-ui/core/Slider";
export default function App({ value, setValue }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <form>
      <Slider valueLabelDisplay="auto" value={value} onChange={handleChange} />
    </form>
  );
}
