import React from "react";
import Ingredients from "./Ingredients";

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  showIngredients,
  setShowIngredients,
}) => {
  return (
    <div
      className="recipe"
      onDoubleClick={() => setShowIngredients(!showIngredients)}
    >
      <h1>Title: {title}</h1>
      <p>Calories: {Math.trunc(calories)}</p>
      <img src={image}></img>
      {showIngredients ? <Ingredients ingredients={ingredients} /> : null}
    </div>
  );
};
export default Recipe;
