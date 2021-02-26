import "./App.css";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

export default function App() {
  const APP_ID = "306c750d";
  const APP_KEY = "9e316b430860a9b8434086fd581f533b";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [showIngredients, setShowIngredients] = useState(false);

  useEffect(() => {
    console.log(process.env);
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div>
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar "
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search=button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(
        (recipe) => (
          console.log(recipe),
          (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              showIngredients={showIngredients}
              setShowIngredients={setShowIngredients}
            />
          )
        )
      )}
    </div>
  );
}
