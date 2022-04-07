import Axios from "axios";
import { useState } from "react";
import "./app.css";
import RecipeTile from "./components/recipe-tile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);

  // const YOUR_APP_ID = `c6aa97b9`;
  // const YOUR_APP_KEY = "3bbbb2b85731544cafbbab4a67168430a";

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=bb70059e&app_key=599f076a13d5a28d5e1172b33f6acafe`


  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    // console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>Food Recipe Plaza 🍔</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>

      <div className="app__recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
          })}
      </div>
    </div>
  );
}

export default App;
