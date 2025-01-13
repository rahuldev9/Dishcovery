import React, { useState } from "react";
import axios from "axios";
import Home from "./Home";
import Loader from "./Loader";

const Search = () => {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State to hold selected recipe details
  const [home, setHome] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const API_KEY = process.env.REACT_APP_KEY;

  // Function to search for recipes based on ingredients
  const searchRecipesByIngredients = async () => {
    if (!ingredients) {
      setError(true);
      return;
    }
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/findByIngredients",
        {
          params: {
            ingredients: ingredients, // Ingredients input by the user
            number: 100, // Limit the number of recipes returned
            apiKey: API_KEY,
          },
        }
      );
      setRecipes(response.data); // Store fetched recipes in state
      setSelectedRecipe(null); // Reset selected recipe when new search is done
    } catch (error) {
      console.error("Error fetching recipes by ingredients:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to get recipe details when a recipe is selected
  const fetchRecipeDetails = async (recipeId) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/information`,
        {
          params: {
            apiKey: API_KEY,
          },
        }
      );

      // Sanitize instructions by removing HTML tags
      const sanitizedInstructions = response.data.instructions
        ? response.data.instructions.replace(/<[^>]+>/g, "")
        : "Instructions not available";

      setHome(false);
      setSelectedRecipe({
        ...response.data,
        instructions: sanitizedInstructions, // Set sanitized instructions
      });
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    setError(false);
    searchRecipesByIngredients();
  };

  return (
    <>
      <div id="background" style={{ textAlign: "center", padding: "10px" }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <a href="/">
            <img
              src="favicon.png"
              alt="veg"
              style={{ height: "50px", width: "50px", margin: "15px" }}
            />
          </a>
          <h1>
            DISH<strong style={{ color: "#ca6702" }}>COVERY</strong>
          </h1>
        </div>
        <form onSubmit={handleSearch}>
          <div className="group">
            <input
              placeholder="Enter ingredients (e.g., tomato, cheese)"
              type="search"
              className="input"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              style={{ padding: "10px", width: "100%" }}
            />
            <button className="searchButton" type="submit">
              {/* Search Button SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <g clipPath="url(#clip0_2_17)">
                  <g filter="url(#filter0_d_2_17)">
                    <path
                      d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      shapeRendering="crispEdges"
                    ></path>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_2_17"
                    x="-0.418549"
                    y="3.70435"
                    width="29.7139"
                    height="29.7139"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_17"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2_17"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_2_17">
                    <rect
                      width="28.0702"
                      height="28.0702"
                      fill="white"
                      transform="translate(0.403503 0.526367)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </form>
        {error && <p style={{ color: "red" }}>Enter valid input!</p>}
        {loading ? (
          <Loader />
        ) : (
          <div style={{ marginTop: "20px" }}>
            {recipes.length > 0 && !selectedRecipe && (
              <div>
                <h2>Recipes You Can Make</h2>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {recipes.map((recipe) => (
                    <div
                      key={recipe.id}
                      style={{
                        borderRadius: "8px",
                        margin: "10px",
                        padding: "10px",
                        width: "250px",
                        textAlign: "center",
                        cursor: "pointer", // Change cursor to indicate clickable
                      }}
                      onClick={() => fetchRecipeDetails(recipe.id)}
                    >
                      <div className="card">
                        <div className="card-details">
                          <h3>{recipe.title}</h3>
                          <img
                            src={recipe.image}
                            alt={recipe.title}
                            style={{ width: "100%", borderRadius: "8px" }}
                          />
                          <p>
                            <strong>Used Ingredients:</strong> {recipe.usedIngredientCount}
                          </p>
                          <p>
                            <strong>Missing Ingredients:</strong> {recipe.missedIngredientCount}
                          </p>
                        </div>
                        {recipe.missedIngredients.length > 0 && (
                          <div>
                            <h4>Missing Ingredients:</h4>
                            <ul style={{ listStyleType: "none", padding: 0 }}>
                              {recipe.missedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>
                                  <p>
                                    {ingredient.name} ({ingredient.amount} {ingredient.unit})
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <button
                          className="card-button"
                          onClick={() => fetchRecipeDetails(recipe.id)}
                        >
                          How to make?
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedRecipe && (
              <>
                <h2>{selectedRecipe.title}</h2>
                <div
                  style={{
                    marginTop: "20px",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  <img
                    src={selectedRecipe.image}
                    alt={selectedRecipe.title}
                    style={{ width: "300px", borderRadius: "8px" }}
                  />
                  <div>
                    <div>
                      <h1>Instructions:</h1>
                      <h2>{selectedRecipe.instructions}</h2>
                    </div>
                    <button
                      className="btn-17"
                      onClick={() => setSelectedRecipe(null)}
                      style={{ marginTop: "20px" }}
                    >
                      <span className="text-container">
                        <span className="text">Back to Recipes</span>
                      </span>
                    </button>
                  </div>
                </div>
              </>
            )}
            {home && <Home />}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
