import React from "react";

const RecipeCard = ({ recipe, onToggleCompletion }) => {
  const handleToggleCompletion = () => {
    onToggleCompletion(recipe); // Pass the recipe to the parent component
  };

  return (
    <div
      className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden mx-auto w-64 h-80 py-2 flex flex-col justify-between"
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
            className="w-16 h-16"
            style={{
              borderRadius: "10px",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        <div className="px-4 py-2 flex-auto align-center items-center justify-center flex flex-col">
          <h2 className="text-xl font-extrabold text-gray-800 my-auto text-center">
            {recipe.name}
          </h2>
        </div>
      </div>
      <div className="px-4 py-2">
        <ul>
          {recipe.materials.map((material, index) => (
            <li key={index} className="text-md text-gray-700 font-semibold">
              {material.name}: {material.quantity}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-4 py-2 flex justify-center">
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
