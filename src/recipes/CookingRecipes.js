//https://stardewvalleywiki.com/
const cookingRecipes = [
  {
    name: "Omelette",
    description: "A delicious breakfast dish.",
    type: "Cooking",
    materials: [
      { name: "Egg", quantity: 1 },
      { name: "Milk", quantity: 1 },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/1/12/Omelet.png",
    completed: false,
  },
  {
    name: "Salad",
    description: "A healthy garden salad.",
    type: "Cooking",
    materials: [
      { name: "Lettuce", quantity: 1 },
      { name: "Tomato", quantity: 1 },
      { name: "Cucumber", quantity: 1 },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Salad.png",
    completed: false,
  },
  {
    name: "Fried Egg",
    description: "Simple and satisfying.",
    type: "Cooking",
    materials: [{ name: "Egg", quantity: 1 }],
    image: "https://stardewvalleywiki.com//mediawiki/images/1/18/Fried_Egg.png",
    completed: false,
  },
];

export default cookingRecipes;
