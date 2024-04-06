import React from "react";

const RecipeCard = ({ recipe, onToggleCompletion }) => {
  const handleToggleCompletion = () => {
    onToggleCompletion(recipe); // Pass the recipe to the parent component
  };

  return (
    <div
      className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden mx-auto w-64 h-64 py-2 flex flex-col justify-between"
      style={{
        backgroundColor: "#ffe0b0",
        margin: "5px",
        border: "5px solid #804000",
        borderRadius: "15px",
      }}
    >
      <div className="flex">
        <div className="px-4 py-2 flex-0">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-16 h-full"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="px-4 py-2 flex-auto align-center items-center justify-center flex flex-col">
          <h2 className="text-lg font-bold text-gray-800 my-auto text-center">
            {recipe.name}
          </h2>
        </div>
      </div>
      <div className="px-4 py-2">
        <ul>
          {recipe.materials.map((material, index) => (
            <li key={index} className="text-sm text-gray-700">
              {material.name}: {material.quantity}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-4 py-2 flex justify-center">
        {" "}
        {/* Adjusted here */}
        <button
          className={`px-4 py-2 rounded ${
            recipe.completed ? "bg-green-600" : "bg-amber-800"
          } text-white transition-colors duration-300`}
          onClick={handleToggleCompletion}
        >
          {recipe.completed ? "Completed" : "Complete"}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
