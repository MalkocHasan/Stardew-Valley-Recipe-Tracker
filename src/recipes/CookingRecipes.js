//https://stardewvalleywiki.com/
const cookingRecipes = [
  {
    name: "Fried Egg",
    type: "Cooking",
    materials: [
      {
        name: "Egg",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/1/18/Fried_Egg.png",
    completed: false,
  },
  {
    name: "Omelet",
    type: "Cooking",
    materials: [
      {
        name: "Egg",
        quantity: 1,
      },
      {
        name: "Milk",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/1/12/Omelet.png",
    completed: false,
  },
  {
    name: "Salad",
    type: "Cooking",
    materials: [
      {
        name: "Leek",
        quantity: 1,
      },
      {
        name: "Dandelion",
        quantity: 1,
      },
      {
        name: "Vinegar",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/7/7e/Salad.png",
    completed: false,
  },
  {
    name: "Cheese Cauliflower",
    type: "Cooking",
    materials: [
      {
        name: "Cauliflower",
        quantity: 1,
      },
      {
        name: "Cheese",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/6/6e/Cheese_Cauliflower.png",
    completed: false,
  },
  {
    name: "Baked Fish",
    type: "Cooking",
    materials: [
      {
        name: "Sunfish",
        quantity: 1,
      },
      {
        name: "Bream",
        quantity: 1,
      },
      {
        name: "Wheat Flour",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/9/94/Baked_Fish.png",
    completed: false,
  },
  {
    name: "Parsnip Soup",
    type: "Cooking",
    materials: [
      {
        name: "Parsnip",
        quantity: 1,
      },
      {
        name: "Milk",
        quantity: 1,
      },
      {
        name: "Vinegar",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/7/76/Parsnip_Soup.png",
    completed: false,
  },
  {
    name: "Vegetable Medley",
    type: "Cooking",
    materials: [
      {
        name: "Tomato",
        quantity: 1,
      },
      {
        name: "Beet",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/0/0a/Vegetable_Medley.png",
    completed: false,
  },
  {
    name: "Complete Breakfast",
    type: "Cooking",
    materials: [
      {
        name: "Fried Egg",
        quantity: 1,
      },
      {
        name: "Milk",
        quantity: 1,
      },
      {
        name: "Hashbrowns",
        quantity: 1,
      },
      {
        name: "Pancakes",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/3/3d/Complete_Breakfast.png",
    completed: false,
  },
  {
    name: "Fried Calamari",
    type: "Cooking",
    materials: [
      {
        name: "Squid",
        quantity: 1,
      },
      {
        name: "Wheat Flour",
        quantity: 1,
      },
      {
        name: "Oil",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/2/25/Fried_Calamari.png",
    completed: false,
  },
  {
    name: "Strange Bun",
    type: "Cooking",
    materials: [
      {
        name: "Wheat Flour",
        quantity: 1,
      },
      {
        name: "Periwinkle",
        quantity: 1,
      },
      {
        name: "Void Mayonnaise",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/5/5e/Strange_Bun.png",
    completed: false,
  },
  {
    name: "Lucky Lunch",
    type: "Cooking",
    materials: [
      {
        name: "Sea Cucumber",
        quantity: 1,
      },
      {
        name: "Tortilla",
        quantity: 1,
      },
      {
        name: "Blue Jazz",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/5/5d/Lucky_Lunch.png",
    completed: false,
  },
  {
    name: "Fried Mushroom",
    type: "Cooking",
    materials: [
      {
        name: "Common Mushroom",
        quantity: 1,
      },
      {
        name: "Morel",
        quantity: 1,
      },
      {
        name: "Oil",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/4/4a/Fried_Mushroom.png",
    completed: false,
  },
  {
    name: "Pizza",
    type: "Cooking",
    materials: [
      {
        name: "Wheat Flour",
        quantity: 1,
      },
      {
        name: "Tomato",
        quantity: 1,
      },
      {
        name: "Cheese",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/f/f4/Pizza.png",
    completed: false,
  },
  {
    name: "Bean Hotpot",
    type: "Cooking",
    materials: [
      {
        name: "Green Bean",
        quantity: 2,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/2/24/Bean_Hotpot.png",
    completed: false,
  },
  {
    name: "Glazed Yams",
    type: "Cooking",
    materials: [
      {
        name: "Yam",
        quantity: 1,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/3/30/Glazed_Yams.png",
    completed: false,
  },
  {
    name: "Carp Surprise",
    type: "Cooking",
    materials: [
      {
        name: "Carp",
        quantity: 4,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/c/cc/Carp_Surprise.png",
    completed: false,
  },
  {
    name: "Hashbrowns",
    type: "Cooking",
    materials: [
      {
        name: "Potato",
        quantity: 1,
      },
      {
        name: "Oil",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/8/8f/Hashbrowns.png",
    completed: false,
  },
  {
    name: "Pancakes",
    type: "Cooking",
    materials: [
      {
        name: "Wheat Flour",
        quantity: 1,
      },
      {
        name: "Egg",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/6/6b/Pancakes.png",
    completed: false,
  },
  {
    name: "Salmon Dinner",
    type: "Cooking",
    materials: [
      {
        name: "Salmon",
        quantity: 1,
      },
      {
        name: "Amaranth",
        quantity: 1,
      },
      {
        name: "Kale",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/8/8b/Salmon_Dinner.png",
    completed: false,
  },
  {
    name: "Fish Taco",
    type: "Cooking",
    materials: [
      {
        name: "Tuna",
        quantity: 1,
      },
      {
        name: "Tortilla",
        quantity: 1,
      },
      {
        name: "Red Cabbage",
        quantity: 1,
      },
      {
        name: "Mayonnaise",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/d/d5/Fish_Taco.png",
    completed: false,
  },
  {
    name: "Crispy Bass",
    type: "Cooking",
    materials: [
      {
        name: "Largemouth Bass",
        quantity: 1,
      },
      {
        name: "Wheat Flour",
        quantity: 1,
      },
      {
        name: "Oil",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/5/53/Crispy_Bass.png",
    completed: false,
  },
  {
    name: "Pepper Poppers",
    type: "Cooking",
    materials: [
      {
        name: "Hot Pepper",
        quantity: 1,
      },
      {
        name: "Cheese",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/0/08/Pepper_Poppers.png",
    completed: false,
  },
  {
    name: "Bread",
    type: "Cooking",
    materials: [
      {
        name: "Wheat Flour",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/e/e1/Bread.png",
    completed: false,
  },
  {
    name: "Tom Kha Soup",
    type: "Cooking",
    materials: [
      {
        name: "Coconut",
        quantity: 1,
      },
      {
        name: "Shrimp",
        quantity: 1,
      },
      {
        name: "Common Mushroom",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/3/3b/Tom_Kha_Soup.png",
    completed: false,
  },
  {
    name: "Trout Soup",
    type: "Cooking",
    materials: [
      {
        name: "Rainbow Trout",
        quantity: 1,
      },
      {
        name: "Green Algae",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/4/48/Trout_Soup.png",
    completed: false,
  },
  {
    name: "Chocolate Cake",
    type: "Cooking",
    materials: [
      {
        name: "Wheat Flour",
        quantity: 1,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
      {
        name: "Egg",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/8/87/Chocolate_Cake.png",
    completed: false,
  },
  {
    name: "Pink Cake",
    type: "Cooking",
    materials: [
      {
        name: "Melon",
        quantity: 1,
      },
      {
        name: "Wheat Flour",
        quantity: 1,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
      {
        name: "Egg",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/3/32/Pink_Cake.png",
    completed: false,
  },
  {
    name: "Rhubarb Pie",
    type: "Cooking",
    materials: [
      {
        name: "Rhubarb",
        quantity: 1,
      },
      {
        name: "Wheat Flour",
        quantity: 1,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/2/21/Rhubarb_Pie.png",
    completed: false,
  },
  {
    name: "Cookie",
    type: "Cooking",
    materials: [
      {
        name: "Wheat Flour",
        quantity: 1,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
      {
        name: "Egg",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/7/70/Cookie.png",
    completed: false,
  },
  {
    name: "Spaghetti",
    type: "Cooking",
    materials: [
      {
        name: "Wheat Flour",
        quantity: 1,
      },
      {
        name: "Tomato",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/0/08/Spaghetti.png",
    completed: false,
  },
  {
    name: "Fried Eel",
    type: "Cooking",
    materials: [
      {
        name: "Eel",
        quantity: 1,
      },
      {
        name: "Oil",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/8/84/Fried_Eel.png",
    completed: false,
  },
  {
    name: "Spicy Eel",
    type: "Cooking",
    materials: [
      {
        name: "Eel",
        quantity: 1,
      },
      {
        name: "Hot Pepper",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/f/f2/Spicy_Eel.png",
    completed: false,
  },
  {
    name: "Sashimi",
    type: "Cooking",
    materials: [
      {
        name: "Fish",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/4/41/Sashimi.png",
    completed: false,
  },
  {
    name: "Maki Roll",
    type: "Cooking",
    materials: [
      {
        name: "Fish",
        quantity: 1,
      },
      {
        name: "Seaweed",
        quantity: 1,
      },
      {
        name: "Rice",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/b/b6/Maki_Roll.png",
    completed: false,
  },
  {
    name: "Tortilla",
    type: "Cooking",
    materials: [
      {
        name: "Corn",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/d/d7/Tortilla.png",
    completed: false,
  },
  {
    name: "Red Plate",
    type: "Cooking",
    materials: [
      {
        name: "Red Cabbage",
        quantity: 1,
      },
      {
        name: "Radish",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/4/45/Red_Plate.png",
    completed: false,
  },
  {
    name: "Eggplant Parmesan",
    type: "Cooking",
    materials: [
      {
        name: "Eggplant",
        quantity: 1,
      },
      {
        name: "Tomato",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/7/73/Eggplant_Parmesan.png",
    completed: false,
  },
  {
    name: "Rice Pudding",
    type: "Cooking",
    materials: [
      {
        name: "Milk",
        quantity: 1,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
      {
        name: "Rice",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/e/ec/Rice_Pudding.png",
    completed: false,
  },
  {
    name: "Ice Cream",
    type: "Cooking",
    materials: [
      {
        name: "Milk",
        quantity: 1,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/5/5d/Ice_Cream.png",
    completed: false,
  },
  {
    name: "Blueberry Tart",
    type: "Cooking",
    materials: [
      {
        name: "Blueberry",
        quantity: 1,
      },
      {
        name: "Wheat Flour",
        quantity: 1,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
      {
        name: "Egg",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/9/9b/Blueberry_Tart.png",
    completed: false,
  },
  {
    name: "Autumn's Bounty",
    type: "Cooking",
    materials: [
      {
        name: "Yam",
        quantity: 1,
      },
      {
        name: "Pumpkin",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/f/f4/Autumn%27s_Bounty.png",
    completed: false,
  },
  {
    name: "Pumpkin Soup",
    type: "Cooking",
    materials: [
      {
        name: "Pumpkin",
        quantity: 1,
      },
      {
        name: "Milk",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/5/59/Pumpkin_Soup.png",
    completed: false,
  },
  {
    name: "Super Meal",
    type: "Cooking",
    materials: [
      {
        name: "Bok Choy",
        quantity: 1,
      },
      {
        name: "Cranberries",
        quantity: 1,
      },
      {
        name: "Artichoke",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/d/d2/Super_Meal.png",
    completed: false,
  },
  {
    name: "Cranberry Sauce",
    type: "Cooking",
    materials: [
      {
        name: "Cranberries",
        quantity: 1,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/0/0b/Cranberry_Sauce.png",
    completed: false,
  },
  {
    name: "Stuffing",
    type: "Cooking",
    materials: [
      {
        name: "Bread",
        quantity: 1,
      },
      {
        name: "Cranberries",
        quantity: 1,
      },
      {
        name: "Hazelnut",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/9/9a/Stuffing.png",
    completed: false,
  },
  {
    name: "Farmer's Lunch",
    type: "Cooking",
    materials: [
      {
        name: "Omelet",
        quantity: 1,
      },
      {
        name: "Parsnip",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/7/79/Farmer%27s_Lunch.png",
    completed: false,
  },
  {
    name: "Survival Burger",
    type: "Cooking",
    materials: [
      {
        name: "Bread",
        quantity: 1,
      },
      {
        name: "Cave Carrot",
        quantity: 1,
      },
      {
        name: "Eggplant",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/8/87/Survival_Burger.png",
    completed: false,
  },
  {
    name: "Dish O' The Sea",
    type: "Cooking",
    materials: [
      {
        name: "Sardine",
        quantity: 2,
      },
      {
        name: "Hashbrowns",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/f/ff/Dish_O%27_The_Sea.png",
    completed: false,
  },
  {
    name: "Miner's Treat",
    type: "Cooking",
    materials: [
      {
        name: "Cave Carrot",
        quantity: 2,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
      {
        name: "Milk",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/1/12/Miner%27s_Treat.png",
    completed: false,
  },
  {
    name: "Roots Platter",
    type: "Cooking",
    materials: [
      {
        name: "Cave Carrot",
        quantity: 1,
      },
      {
        name: "Winter Root",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/e/e0/Roots_Platter.png",
    completed: false,
  },
  {
    name: "Triple Shot Espresso",
    type: "Cooking",
    materials: [
      {
        name: "Coffee",
        quantity: 3,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/3/36/Triple_Shot_Espresso.png",
    completed: false,
  },
  {
    name: "Seafoam Pudding",
    type: "Cooking",
    materials: [
      {
        name: "Flounder",
        quantity: 1,
      },
      {
        name: "Midnight Carp",
        quantity: 1,
      },
      {
        name: "Squid Ink",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/3/33/Seafoam_Pudding.png",
    completed: false,
  },
  {
    name: "Algae Soup",
    type: "Cooking",
    materials: [
      {
        name: "Green Algae",
        quantity: 4,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/5/53/Algae_Soup.png",
    completed: false,
  },
  {
    name: "Pale Broth",
    type: "Cooking",
    materials: [
      {
        name: "White Algae",
        quantity: 2,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/7/7e/Pale_Broth.png",
    completed: false,
  },
  {
    name: "Plum Pudding",
    type: "Cooking",
    materials: [
      {
        name: "Wild Plum",
        quantity: 2,
      },
      {
        name: "Wheat Flour",
        quantity: 1,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/a/a0/Plum_Pudding.png",
    completed: false,
  },
  {
    name: "Artichoke Dip",
    type: "Cooking",
    materials: [
      {
        name: "Artichoke",
        quantity: 1,
      },
      {
        name: "Milk",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/7/77/Artichoke_Dip.png",
    completed: false,
  },
  {
    name: "Stir Fry",
    type: "Cooking",
    materials: [
      {
        name: "Cave Carrot",
        quantity: 1,
      },
      {
        name: "Common Mushroom",
        quantity: 1,
      },
      {
        name: "Kale",
        quantity: 1,
      },
      {
        name: "Oil",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/e/ed/Stir_Fry.png",
    completed: false,
  },
  {
    name: "Roasted Hazelnuts",
    type: "Cooking",
    materials: [
      {
        name: "Hazelnut",
        quantity: 3,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/1/18/Roasted_Hazelnuts.png",
    completed: false,
  },
  {
    name: "Pumpkin Pie",
    type: "Cooking",
    materials: [
      {
        name: "Pumpkin",
        quantity: 1,
      },
      {
        name: "Wheat Flour",
        quantity: 1,
      },
      {
        name: "Milk",
        quantity: 1,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/7/7d/Pumpkin_Pie.png",
    completed: false,
  },
  {
    name: "Radish Salad",
    type: "Cooking",
    materials: [
      {
        name: "Oil",
        quantity: 1,
      },
      {
        name: "Vinegar",
        quantity: 1,
      },
      {
        name: "Radish",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/b/b9/Radish_Salad.png",
    completed: false,
  },
  {
    name: "Fruit Salad",
    type: "Cooking",
    materials: [
      {
        name: "Blueberry",
        quantity: 1,
      },
      {
        name: "Melon",
        quantity: 1,
      },
      {
        name: "Apricot",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/9/9e/Fruit_Salad.png",
    completed: false,
  },
  {
    name: "Blackberry Cobbler",
    type: "Cooking",
    materials: [
      {
        name: "Blackberry",
        quantity: 2,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
      {
        name: "Wheat Flour",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/7/70/Blackberry_Cobbler.png",
    completed: false,
  },
  {
    name: "Cranberry Candy",
    type: "Cooking",
    materials: [
      {
        name: "Cranberries",
        quantity: 1,
      },
      {
        name: "Apple",
        quantity: 1,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/9/9d/Cranberry_Candy.png",
    completed: false,
  },
  {
    name: "Bruschetta",
    type: "Cooking",
    materials: [
      {
        name: "Bread",
        quantity: 1,
      },
      {
        name: "Oil",
        quantity: 1,
      },
      {
        name: "Tomato",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/c/ca/Bruschetta.png",
    completed: false,
  },
  {
    name: "Coleslaw",
    type: "Cooking",
    materials: [
      {
        name: "Red Cabbage",
        quantity: 1,
      },
      {
        name: "Vinegar",
        quantity: 1,
      },
      {
        name: "Mayonnaise",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/e/e1/Coleslaw.png",
    completed: false,
  },
  {
    name: "Fiddlehead Risotto",
    type: "Cooking",
    materials: [
      {
        name: "Oil",
        quantity: 1,
      },
      {
        name: "Fiddlehead Fern",
        quantity: 1,
      },
      {
        name: "Garlic",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/2/2d/Fiddlehead_Risotto.png",
    completed: false,
  },
  {
    name: "Poppyseed Muffin",
    type: "Cooking",
    materials: [
      {
        name: "Poppy",
        quantity: 1,
      },
      {
        name: "Wheat Flour",
        quantity: 1,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/8/8e/Poppyseed_Muffin.png",
    completed: false,
  },
  {
    name: "Chowder",
    type: "Cooking",
    materials: [
      {
        name: "Clam",
        quantity: 1,
      },
      {
        name: "Milk",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/9/95/Chowder.png",
    completed: false,
  },
  {
    name: "Fish Stew",
    type: "Cooking",
    materials: [
      {
        name: "Crayfish",
        quantity: 1,
      },
      {
        name: "Mussel",
        quantity: 1,
      },
      {
        name: "Periwinkle",
        quantity: 1,
      },
      {
        name: "Tomato",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/6/6f/Fish_Stew.png",
    completed: false,
  },
  {
    name: "Escargot",
    type: "Cooking",
    materials: [
      {
        name: "Snail",
        quantity: 1,
      },
      {
        name: "Garlic",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/7/78/Escargot.png",
    completed: false,
  },
  {
    name: "Lobster Bisque",
    type: "Cooking",
    materials: [
      {
        name: "Lobster",
        quantity: 1,
      },
      {
        name: "Milk",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/0/0a/Lobster_Bisque.png",
    completed: false,
  },
  {
    name: "Maple Bar",
    type: "Cooking",
    materials: [
      {
        name: "Maple Syrup",
        quantity: 1,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
      {
        name: "Wheat Flour",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/1/18/Maple_Bar.png",
    completed: false,
  },
  {
    name: "Crab Cakes",
    type: "Cooking",
    materials: [
      {
        name: "Crab",
        quantity: 1,
      },
      {
        name: "Wheat Flour",
        quantity: 1,
      },
      {
        name: "Egg",
        quantity: 1,
      },
      {
        name: "Oil",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/7/70/Crab_Cakes.png",
    completed: false,
  },
  {
    name: "Shrimp Cocktail",
    type: "Cooking",
    materials: [
      {
        name: "Tomato",
        quantity: 1,
      },
      {
        name: "Shrimp",
        quantity: 1,
      },
      {
        name: "Wild Horseradish",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/8/8e/Shrimp_Cocktail.png",
    completed: false,
  },
  {
    name: "Ginger Ale",
    type: "Cooking",
    materials: [
      {
        name: "Ginger",
        quantity: 3,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/1/1a/Ginger_Ale.png",
    completed: false,
  },
  {
    name: "Banana Pudding",
    type: "Cooking",
    materials: [
      {
        name: "Banana",
        quantity: 1,
      },
      {
        name: "Milk",
        quantity: 1,
      },
      {
        name: "Sugar",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/4/40/Banana_Pudding.png",
    completed: false,
  },
  {
    name: "Mango Sticky Rice",
    type: "Cooking",
    materials: [
      {
        name: "Mango",
        quantity: 1,
      },
      {
        name: "Coconut",
        quantity: 1,
      },
      {
        name: "Rice",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/6/6e/Mango_Sticky_Rice.png",
    completed: false,
  },
  {
    name: "Poi",
    type: "Cooking",
    materials: [
      {
        name: "Taro Root",
        quantity: 4,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/f/f1/Poi.png",
    completed: false,
  },
  {
    name: "Tropical Curry",
    type: "Cooking",
    materials: [
      {
        name: "Coconut",
        quantity: 1,
      },
      {
        name: "Pineapple",
        quantity: 1,
      },
      {
        name: "Hot Pepper",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/3/32/Tropical_Curry.png",
    completed: false,
  },
  {
    name: "Squid Ink Ravioli",
    type: "Cooking",
    materials: [
      {
        name: "Squid Ink",
        quantity: 1,
      },
      {
        name: "Wheat Flour",
        quantity: 1,
      },
      {
        name: "Tomato",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com//mediawiki/images/8/86/Squid_Ink_Ravioli.png",
    completed: false,
  },
  {
    name: "Moss Soup",
    type: "Cooking",
    materials: [
      {
        name: "Moss",
        quantity: 20,
      },
    ],
    image: "https://stardewvalleywiki.com//mediawiki/images/d/df/Moss_Soup.png",
    completed: false,
  },
];

export default cookingRecipes;
