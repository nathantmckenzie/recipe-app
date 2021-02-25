import "./App.css";

import React, { useEffect, useState } from "react";

export default function App() {
  const APP_ID = "306c750d";
  const APP_KEY = "9e316b430860a9b8434086fd581f533b";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {});

  return (
    <div>
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search=button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
