import React from "react";

const Recipe = ({ title, calories, image }) => {
  return (
    <div className="recipe">
      <h1>Title: {title}</h1>
      <p>Calories: {Math.trunc(calories)}</p>
      <img src={image}></img>
    </div>
  );
};
export default Recipe;
