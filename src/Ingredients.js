import React from "react";

export default function Ingredients({
  allIngredients,
  currentlySelected,
  key,
  recipes,
}) {
  console.log("currentlySelected", currentlySelected);

  return (
    <div>
      {allIngredients.map((ingredients) => (
        <li>{ingredients.text}</li>
      ))}
    </div>
  );
}
