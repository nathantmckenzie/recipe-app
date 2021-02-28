import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const followersMarks = [
  {
    value: 0,
    scaledValue: 0,
    label: "0",
  },
  {
    value: 25,
    scaledValue: 500,
    label: "500",
  },
  {
    value: 50,
    scaledValue: 1000,
    label: "1000",
  },
  {
    value: 75,
    scaledValue: 1500,
    label: "1500",
  },
  {
    value: 100,
    scaledValue: 2000,
    label: "2000",
  },
  {
    value: 125,
    scaledValue: 2500,
    label: "2500",
  },
  {
    value: 150,
    scaledValue: 3000,
    label: "3000",
  },
  {
    value: 175,
    scaledValue: 3500,
    label: "3500",
  },
  {
    value: 200,
    scaledValue: 4000,
    label: "4000",
  },
];

const scale = (value) => {
  const previousMarkIndex = Math.floor(value / 25);
  const previousMark = followersMarks[previousMarkIndex];
  const remainder = value % 25;
  if (remainder === 0) {
    return previousMark.scaledValue;
  }
  const nextMark = followersMarks[previousMarkIndex + 1];
  const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
  return remainder * increment + previousMark.scaledValue;
};

function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
}

export default function NonLinearSlider({ value, setValue }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography id="non-linear-slider" gutterBottom>
        Calories
      </Typography>
      <Slider
        style={{ maxWidth: 500 }}
        value={value}
        min={0}
        step={1}
        max={200}
        valueLabelFormat={numFormatter}
        marks={followersMarks}
        scale={scale}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
      <Typography>Maximum Calories: {scale(value)}</Typography>
    </div>
  );
}
