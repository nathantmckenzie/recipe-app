import React from "react";
import Ingredients from "./Ingredients";

const Recipe = ({
  title,
  calories,
  image,
  allIngredients,
  showIngredients,
  setShowIngredients,
  key,
  currentlySelected,
  setCurrentlySelected,
  recipes,
}) => {
  function clickHandler() {
    if (currentlySelected !== title) {
      setCurrentlySelected(title);
    } else {
      setCurrentlySelected(null);
    }

    setShowIngredients(!showIngredients);
  }
  return (
    <>
      <div className="recipe" onDoubleClick={clickHandler}>
        <h1>{title}</h1>
        <p>Calories: {Math.trunc(calories)}</p>
        <img src={image}></img>
      </div>
      <div id="ingredients-container">
        {currentlySelected === title ? (
          <Ingredients
            allIngredients={allIngredients}
            currentlySelected={currentlySelected}
            key={key}
            recipes={recipes}
          />
        ) : null}
      </div>
    </>
  );
};
export default Recipe;
