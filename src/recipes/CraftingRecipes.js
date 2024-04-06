const craftingRecipes = [
  {
    name: "Scarecrow",
    description: "Protects your crops from crows.",
    type: "Crafting",
    materials: [
      { name: "Wood", quantity: 50 },
      { name: "Coal", quantity: 1 },
      { name: "Fiber", quantity: 20 },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/7/75/Scarecrow.png",
    completed: false,
  },
  {
    name: "Smoker",
    description: "Used for smoking food.",
    type: "Crafting",
    materials: [
      { name: "Wood", quantity: 25 },
      { name: "Coal", quantity: 10 },
      { name: "Gold Bar", quantity: 1 },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/7/79/Fish_Smoker.png",
    completed: false,
  },
];

export default craftingRecipes;
