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
      <h1 className="text-3xl font-bold mb-4 items-center justify-center flex flex-col">
        Recipe Tracker
      </h1>
      <div className="flex mb-4 items-center justify-center flex-row">
        <button
          className={`px-4 py-2 rounded mr-4 ${
            activeTab === "crafting"
              ? "bg-amber-900 text-white border-4 border-amber-900"
              : "bg-amber-800 text-white border-4 border-blue-950"
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
              ? "bg-amber-800 text-white border-4 border-blue-950"
              : "bg-amber-900 text-white border-4 border-amber-900"
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
              <h2 className="text-lg font-bold mb-2 items-center justify-center flex">
                Total Material Count
              </h2>
              <ul>
                {Object.entries(totalMaterials).map(([name, quantity]) => (
                  <li
                    key={name}
                    className="text-sm text-gray-700 items-center justify-center flex flex-row"
                  >
                    {name}: {quantity}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              minHeight: "100vh",
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
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-2">Completed Recipes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
