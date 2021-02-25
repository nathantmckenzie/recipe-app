import React from "react";

const Recipe = ({ title, calories, image }) => {
  return (
    <div className="recipe">
      <div>Title: {title}</div>
      <p>Calories: {Math.trunc(calories)}</p>
      <img src={image}></img>
    </div>
  );
};
export default Recipe;
