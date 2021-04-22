import "./App.css";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Slider from "./Slider";
import Input from "./Input";
import Button from "./Button";

export default function App() {
  const APP_ID = "306c750d";
  const APP_KEY = "9e316b430860a9b8434086fd581f533b";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [showIngredients, setShowIngredients] = useState(false);
  const [currentlySelected, setCurrentlySelected] = useState("");
  const [value, setValue] = useState([10, 20]);

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
    console.log("search", search);
    setQuery(search);
  };

  return (
    <div>
      <form className="search-form">
        <Input
          className="search-bar "
          type="text"
          search={search}
          setSearch={setSearch}
        />
        <Button title="Search" getSearch={getSearch} />
        {/* <input
          className="search-bar "
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search=button" type="submit">
          Search
        </button> */}
        <Slider value={value} setValue={setValue} />
      </form>
      {console.log("RECIPES", recipes)}
      {recipes.map((recipe) =>
        recipe.recipe.calories > value[0] * 100 &&
        recipe.recipe.calories < value[1] * 100 ? (
          <Recipe
            recipes={recipe}
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            allIngredients={recipe.recipe.ingredients}
            showIngredients={showIngredients}
            setShowIngredients={setShowIngredients}
            currentlySelected={currentlySelected}
            setCurrentlySelected={setCurrentlySelected}
          />
        ) : null
      )}
    </div>
  );
}
