import React, { useState, useEffect } from "react";
import "./App.css";
import RecipeCard from "./components/RecipeCard";
import cookingRecipes from "./recipes/CookingRecipes";
import craftingRecipes from "./recipes/CraftingRecipes";

function App() {
  const [activeTab, setActiveTab] = useState("cooking");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cachedRecipes = localStorage.getItem(`${activeTab}_recipes`);
    if (cachedRecipes) {
      setRecipes(JSON.parse(cachedRecipes));
      setLoading(false);
    } else {
      fetchRecipes(activeTab);
    }
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem(`${activeTab}_recipes`, JSON.stringify(recipes));
  }, [activeTab, recipes]);

  const fetchRecipes = (tab) => {
    setLoading(true);
    const url =
      tab === "cooking"
        ? "/recipes/CookingRecipes.json"
        : "/recipes/CraftingRecipes.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        localStorage.setItem(`${tab}_recipes`, JSON.stringify(data));
      })
      .catch((error) => console.error("Error fetching recipes:", error))
      .finally(() => setLoading(false));
  };

  const handleToggleCompletion = (recipeToUpdate) => {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.name === recipeToUpdate.name) {
        return { ...recipe, completed: !recipe.completed };
      }
      return recipe;
    });

    setRecipes(updatedRecipes);

    localStorage.setItem(
      `${activeTab}_recipes`,
      JSON.stringify(updatedRecipes)
    );
  };

  const filteredRecipes = recipes.filter((recipe) => !recipe.completed);
  const completedRecipes = recipes.filter((recipe) => recipe.completed);

  const totalMaterials = recipes.reduce((acc, recipe) => {
    if (!recipe.completed) {
      recipe.materials.forEach((material) => {
        if (!acc[material.name]) {
          acc[material.name] = 0;
        }
        acc[material.name] += material.quantity;
      });
    }
    return acc;
  }, {});

  return (
    <div className="container p-4">
      <h1 className="text-5xl font-bold mb-8 items-center justify-center flex flex-col">
        Recipe Tracker
      </h1>
      <div className="flex mb-4 items-center justify-center flex-row">
        <button
          className={`px-4 py-2 rounded mr-4 ${
            activeTab === "crafting"
              ? "bg-amber-800 text-white border-4 border-amber-800"
              : "bg-amber-900 text-white border-4 border-blue-950"
          }`}
          onClick={
            activeTab !== "cooking"
              ? () => {
                  setActiveTab("cooking");
                  setRecipes(cookingRecipes);
                }
              : null
          }
          disabled={activeTab === "cooking"}
        >
          Cooking
        </button>

        <button
          className={`px-4 py-2 rounded ${
            activeTab === "crafting"
              ? "bg-amber-900 text-white border-4 border-blue-950"
              : "bg-amber-800 text-white border-4 border-amber-800"
          }`}
          onClick={
            activeTab !== "crafting"
              ? () => {
                  setActiveTab("crafting");
                  setRecipes(craftingRecipes);
                }
              : null
          }
          disabled={activeTab === "crafting"}
        >
          Crafting
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {!Object.keys(totalMaterials).length ? null : (
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2 flex items-center justify-center">
                Total Material Count
              </h2>
              <ul className="flex flex-wrap mx-16 ">
                {Object.entries(totalMaterials).map(([name, quantity]) => (
                  <li
                    key={name}
                    className="font-semibold text-md text-gray-700 flex items-center mr-4 mb-2"
                  >
                    <span className="mr-1">{name}:</span>
                    <span>{quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div
            className="block mx-auto"
            style={{
              display: "flex",
              minHeight: "50vh",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {filteredRecipes.map((recipe, index) => (
              <RecipeCard
                key={index}
                recipe={recipe}
                onToggleCompletion={handleToggleCompletion}
              />
            ))}
          </div>

          {completedRecipes.length > 0 && (
            <div className="">
              <h2 className="text-2xl font-bold mt-16 text-center mb-8">
                Completed Recipes
              </h2>
              <div
                className="block mx-auto"
                style={{
                  display: "flex",
                  minHeight: "50vh",
                  flexWrap: "wrap",
                  justifyContent: "center", // Center items horizontally
                  alignItems: "center", // Center items vertically
                }}
              >
                {completedRecipes.map((recipe, index) => (
                  <RecipeCard
                    key={index}
                    recipe={recipe}
                    onToggleCompletion={handleToggleCompletion}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
