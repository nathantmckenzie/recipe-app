import "./App.css";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

export default function App() {
  const APP_ID = "306c750d";
  const APP_KEY = "9e316b430860a9b8434086fd581f533b";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log("DATA HITS", data.hits);
  };

  return (
    <div>
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search=button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}
