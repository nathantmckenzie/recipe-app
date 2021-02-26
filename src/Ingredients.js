import React from "react";

export default function Ingredients({ ingredients }) {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <li>{ingredient.text}</li>
      ))}
    </div>
  );
}
