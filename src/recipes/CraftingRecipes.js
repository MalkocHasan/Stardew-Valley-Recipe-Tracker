const craftingRecipes = [
  {
    name: "Cherry Bomb",
    type: "Cooking",
    materials: [
      {
        name: "Copper Ore",
        quantity: 4,
      },
      {
        name: "Coal",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/1/1b/Cherry_Bomb.png",
    completed: false,
  },
  {
    name: "Bomb",
    type: "Cooking",
    materials: [
      {
        name: "Iron Ore",
        quantity: 4,
      },
      {
        name: "Coal",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/3/3b/Bomb.png",
    completed: false,
  },
  {
    name: "Mega Bomb",
    type: "Cooking",
    materials: [
      {
        name: "Gold Ore",
        quantity: 4,
      },
      {
        name: "Solar Essence",
        quantity: 1,
      },
      {
        name: "Void Essence",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/4/4f/Mega_Bomb.png",
    completed: false,
  },
  {
    name: "Gate",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 10,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/9/94/Gate.png",
    completed: false,
  },
  {
    name: "Wood Fence",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 2,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/1/1e/Wood_Fence.png",
    completed: false,
  },
  {
    name: "Stone Fence",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 2,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/2/2d/Stone_Fence.png",
    completed: false,
  },
  {
    name: "Iron Fence (10)",
    type: "Cooking",
    materials: [
      {
        name: "Iron Bar",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/9/9d/Iron_Fence.png",
    completed: false,
  },
  {
    name: "Hardwood Fence",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/5/5c/Hardwood_Fence.png",
    completed: false,
  },
  {
    name: "Sprinkler",
    type: "Cooking",
    materials: [
      {
        name: "Copper Bar",
        quantity: 1,
      },
      {
        name: "Iron Bar",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/0/08/Sprinkler.png",
    completed: false,
  },
  {
    name: "Quality Sprinkler",
    type: "Cooking",
    materials: [
      {
        name: "Iron Bar",
        quantity: 1,
      },
      {
        name: "Gold Bar",
        quantity: 1,
      },
      {
        name: "Refined Quartz",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/a/af/Quality_Sprinkler.png",
    completed: false,
  },
  {
    name: "Iridium Sprinkler",
    type: "Cooking",
    materials: [
      {
        name: "Gold Bar",
        quantity: 1,
      },
      {
        name: "Iridium Bar",
        quantity: 1,
      },
      {
        name: "Battery Pack",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/9/90/Iridium_Sprinkler.png",
    completed: false,
  },
  {
    name: "Mayonnaise Machine",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 15,
      },
      {
        name: "Stone",
        quantity: 15,
      },
      {
        name: "Earth Crystal",
        quantity: 1,
      },
      {
        name: "Copper Bar",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/e/ef/Mayonnaise_Machine.png",
    completed: false,
  },
  {
    name: "Bee House",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 40,
      },
      {
        name: "Coal",
        quantity: 8,
      },
      {
        name: "Iron Bar",
        quantity: 1,
      },
      {
        name: "Maple Syrup",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/c/ce/Bee_House.png",
    completed: false,
  },
  {
    name: "Preserves Jar",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 50,
      },
      {
        name: "Stone",
        quantity: 40,
      },
      {
        name: "Coal",
        quantity: 8,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/1/1e/Preserves_Jar.png",
    completed: false,
  },
  {
    name: "Cheese Press",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 45,
      },
      {
        name: "Stone",
        quantity: 45,
      },
      {
        name: "Hardwood",
        quantity: 10,
      },
      {
        name: "Copper Bar",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/7/79/Cheese_Press.png",
    completed: false,
  },
  {
    name: "Loom",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 60,
      },
      {
        name: "Fiber",
        quantity: 30,
      },
      {
        name: "Pine Tar",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/3/3b/Loom.png",
    completed: false,
  },
  {
    name: "Keg",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 30,
      },
      {
        name: "Copper Bar",
        quantity: 1,
      },
      {
        name: "Iron Bar",
        quantity: 1,
      },
      {
        name: "Oak Resin",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/7/7c/Keg.png",
    completed: false,
  },
  {
    name: "Oil Maker",
    type: "Cooking",
    materials: [
      {
        name: "Slime",
        quantity: 50,
      },
      {
        name: "Hardwood",
        quantity: 20,
      },
      {
        name: "Gold Bar",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/c/c5/Oil_Maker.png",
    completed: false,
  },
  {
    name: "Cask",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 20,
      },
      {
        name: "Hardwood",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/7/7c/Cask.png",
    completed: false,
  },
  {
    name: "Fish Smoker",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 10,
      },
      {
        name: "Sea Jelly",
        quantity: 1,
      },
      {
        name: "River Jelly",
        quantity: 1,
      },
      {
        name: "Cave Jelly",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/7/79/Fish_Smoker.png",
    completed: false,
  },
  {
    name: "Dehydrator",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 30,
      },
      {
        name: "Clay",
        quantity: 2,
      },
      {
        name: "Fire Quartz",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/0/02/Dehydrator.png",
    completed: false,
  },
  {
    name: "Basic Fertilizer",
    type: "Cooking",
    materials: [
      {
        name: "Sap",
        quantity: 2,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/9/9b/Basic_Fertilizer.png",
    completed: false,
  },
  {
    name: "Quality Fertilizer (2)",
    type: "Cooking",
    materials: [
      {
        name: "Sap",
        quantity: 4,
      },
      {
        name: "Fish",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/a/a0/Quality_Fertilizer.png",
    completed: false,
  },
  {
    name: "Deluxe Fertilizer (5)",
    type: "Cooking",
    materials: [
      {
        name: "Iridium Bar",
        quantity: 1,
      },
      {
        name: "Sap",
        quantity: 40,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/1/1c/Deluxe_Fertilizer.png",
    completed: false,
  },
  {
    name: "Speed-Gro (5)",
    type: "Cooking",
    materials: [
      {
        name: "Pine Tar",
        quantity: 1,
      },
      {
        name: "Moss",
        quantity: 5,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/9/94/Speed-Gro.png",
    completed: false,
  },
  {
    name: "Deluxe Speed-Gro (5)",
    type: "Cooking",
    materials: [
      {
        name: "Oak Resin",
        quantity: 1,
      },
      {
        name: "Bone Fragment",
        quantity: 5,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/6/6d/Deluxe_Speed-Gro.png",
    completed: false,
  },
  {
    name: "Hyper Speed-Gro",
    type: "Cooking",
    materials: [
      {
        name: "Radioactive Ore",
        quantity: 1,
      },
      {
        name: "Bone Fragment",
        quantity: 3,
      },
      {
        name: "Solar Essence",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/5/53/Hyper_Speed-Gro.png",
    completed: false,
  },
  {
    name: "Basic Retaining Soil",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 2,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/c/c7/Basic_Retaining_Soil.png",
    completed: false,
  },
  {
    name: "Quality Retaining Soil (2)",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 3,
      },
      {
        name: "Clay",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/0/0a/Quality_Retaining_Soil.png",
    completed: false,
  },
  {
    name: "Deluxe Retaining Soil",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 5,
      },
      {
        name: "Fiber",
        quantity: 3,
      },
      {
        name: "Clay",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/c/c3/Deluxe_Retaining_Soil.png",
    completed: false,
  },
  {
    name: "Tree Fertilizer",
    type: "Cooking",
    materials: [
      {
        name: "Fiber",
        quantity: 5,
      },
      {
        name: "Stone",
        quantity: 5,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/5/5d/Tree_Fertilizer.png",
    completed: false,
  },
  {
    name: "Wild Seeds (Sp)(Spring Seeds)",
    type: "Cooking",
    materials: [
      {
        name: "Wild Horseradish",
        quantity: 1,
      },
      {
        name: "Daffodil",
        quantity: 1,
      },
      {
        name: "Leek",
        quantity: 1,
      },
      {
        name: "Dandelion",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/3/39/Spring_Seeds.png",
    completed: false,
  },
  {
    name: "Wild Seeds (Su)(Summer Seeds)",
    type: "Cooking",
    materials: [
      {
        name: "Spice Berry",
        quantity: 1,
      },
      {
        name: "Grape",
        quantity: 1,
      },
      {
        name: "Sweet Pea",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/c/c4/Summer_Seeds.png",
    completed: false,
  },
  {
    name: "Wild Seeds (Fa)(Fall Seeds)",
    type: "Cooking",
    materials: [
      {
        name: "Common Mushroom",
        quantity: 1,
      },
      {
        name: "Wild Plum",
        quantity: 1,
      },
      {
        name: "Hazelnut",
        quantity: 1,
      },
      {
        name: "Blackberry",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/5/55/Fall_Seeds.png",
    completed: false,
  },
  {
    name: "Wild Seeds (Wi)(Winter Seeds)",
    type: "Cooking",
    materials: [
      {
        name: "Winter Root",
        quantity: 1,
      },
      {
        name: "Crystal Fruit",
        quantity: 1,
      },
      {
        name: "Snow Yam",
        quantity: 1,
      },
      {
        name: "Crocus",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/d/dd/Winter_Seeds.png",
    completed: false,
  },
  {
    name: "Ancient Seeds",
    type: "Cooking",
    materials: [
      {
        name: "Ancient Seed",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/e/ec/Ancient_Seeds.png",
    completed: false,
  },
  {
    name: "Grass Starter",
    type: "Cooking",
    materials: [
      {
        name: "Fiber",
        quantity: 10,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/1/14/Grass_Starter.png",
    completed: false,
  },
  {
    name: "Blue Grass Starter",
    type: "Cooking",
    materials: [
      {
        name: "Fiber",
        quantity: 25,
      },
      {
        name: "Moss",
        quantity: 10,
      },
      {
        name: "Mystic Syrup",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/1/18/Blue_Grass_Starter.png",
    completed: false,
  },
  {
    name: "Tea Sapling",
    type: "Cooking",
    materials: [
      {
        name: "Fiber",
        quantity: 5,
      },
      {
        name: "Wood",
        quantity: 5,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/1/12/Tea_Sapling.png",
    completed: false,
  },
  {
    name: "Fiber Seeds (4)",
    type: "Cooking",
    materials: [
      {
        name: "Mixed Seeds",
        quantity: 1,
      },
      {
        name: "Sap",
        quantity: 5,
      },
      {
        name: "Clay",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/0/05/Fiber_Seeds.png",
    completed: false,
  },
  {
    name: "Mystic Tree Seed",
    type: "Cooking",
    materials: [
      {
        name: "Acorn",
        quantity: 5,
      },
      {
        name: "Maple Seed",
        quantity: 5,
      },
      {
        name: "Pine Cone",
        quantity: 5,
      },
      {
        name: "Mahogany Seed",
        quantity: 5,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/f/ff/Mystic_Tree_Seed.png",
    completed: false,
  },
  {
    name: "Wood Floor",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/5/58/Wood_Floor.png",
    completed: false,
  },
  {
    name: "Rustic Plank Floor",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/9/9e/Rustic_Plank_Floor.png",
    completed: false,
  },
  {
    name: "Straw Floor",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 1,
      },
      {
        name: "Fiber",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/8/85/Straw_Floor.png",
    completed: false,
  },
  {
    name: "Weathered Floor",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/2/2a/Weathered_Floor.png",
    completed: false,
  },
  {
    name: "Crystal Floor (5)",
    type: "Cooking",
    materials: [
      {
        name: "Refined Quartz",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/a/a4/Crystal_Floor.png",
    completed: false,
  },
  {
    name: "Stone Floor",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/4/4e/Stone_Floor.png",
    completed: false,
  },
  {
    name: "Stone Walkway Floor",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/5/51/Stone_Walkway_Floor.png",
    completed: false,
  },
  {
    name: "Brick Floor (5)",
    type: "Cooking",
    materials: [
      {
        name: "Clay",
        quantity: 2,
      },
      {
        name: "Stone",
        quantity: 5,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/2/29/Brick_Floor.png",
    completed: false,
  },
  {
    name: "Wood Path",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/e/e3/Wood_Path.png",
    completed: false,
  },
  {
    name: "Gravel Path",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/1/15/Gravel_Path.png",
    completed: false,
  },
  {
    name: "Cobblestone Path",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/9/90/Cobblestone_Path.png",
    completed: false,
  },
  {
    name: "Stepping Stone Path",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/1/1b/Stepping_Stone_Path.png",
    completed: false,
  },
  {
    name: "Crystal Path (5)",
    type: "Cooking",
    materials: [
      {
        name: "Refined Quartz",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/9/9b/Crystal_Path.png",
    completed: false,
  },
  {
    name: "Spinner",
    type: "Cooking",
    materials: [
      {
        name: "Iron Bar",
        quantity: 2,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/7/7b/Spinner.png",
    completed: false,
  },
  {
    name: "Trap Bobber",
    type: "Cooking",
    materials: [
      {
        name: "Copper Bar",
        quantity: 1,
      },
      {
        name: "Sap",
        quantity: 10,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/d/da/Trap_Bobber.png",
    completed: false,
  },
  {
    name: "Sonar Bobber",
    type: "Cooking",
    materials: [
      {
        name: "Iron Bar",
        quantity: 1,
      },
      {
        name: "Refined Quartz",
        quantity: 2,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/3/33/Sonar_Bobber.png",
    completed: false,
  },
  {
    name: "Cork Bobber",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 10,
      },
      {
        name: "Hardwood",
        quantity: 5,
      },
      {
        name: "Slime",
        quantity: 10,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/0/0b/Cork_Bobber.png",
    completed: false,
  },
  {
    name: "Quality Bobber",
    type: "Cooking",
    materials: [
      {
        name: "Copper Bar",
        quantity: 1,
      },
      {
        name: "Sap",
        quantity: 20,
      },
      {
        name: "Solar Essence",
        quantity: 5,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/0/01/Quality_Bobber.png",
    completed: false,
  },
  {
    name: "Treasure Hunter",
    type: "Cooking",
    materials: [
      {
        name: "Gold Bar",
        quantity: 2,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/7/79/Treasure_Hunter.png",
    completed: false,
  },
  {
    name: "Dressed Spinner",
    type: "Cooking",
    materials: [
      {
        name: "Iron Bar",
        quantity: 2,
      },
      {
        name: "Cloth",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/e/e8/Dressed_Spinner.png",
    completed: false,
  },
  {
    name: "Barbed Hook",
    type: "Cooking",
    materials: [
      {
        name: "Copper Bar",
        quantity: 1,
      },
      {
        name: "Iron Bar",
        quantity: 1,
      },
      {
        name: "Gold Bar",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/4/4f/Barbed_Hook.png",
    completed: false,
  },
  {
    name: "Magnet (3)",
    type: "Cooking",
    materials: [
      {
        name: "Iron Bar",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/8/8c/Magnet.png",
    completed: false,
  },
  {
    name: "Bait (5)",
    type: "Cooking",
    materials: [
      {
        name: "Bug Meat",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/f/ff/Bait.png",
    completed: false,
  },
  {
    name: "Deluxe Bait (5)",
    type: "Cooking",
    materials: [
      {
        name: "Bait",
        quantity: 5,
      },
      {
        name: "Moss",
        quantity: 2,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/4/43/Deluxe_Bait.png",
    completed: false,
  },
  {
    name: "Wild Bait (5)",
    type: "Cooking",
    materials: [
      {
        name: "Fiber",
        quantity: 10,
      },
      {
        name: "Bug Meat",
        quantity: 5,
      },
      {
        name: "Slime",
        quantity: 5,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/d/da/Wild_Bait.png",
    completed: false,
  },
  {
    name: "Magic Bait (5)",
    type: "Cooking",
    materials: [
      {
        name: "Radioactive Ore",
        quantity: 1,
      },
      {
        name: "Bug Meat",
        quantity: 3,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/5/58/Magic_Bait.png",
    completed: false,
  },
  {
    name: "Challenge Bait (5)",
    type: "Cooking",
    materials: [
      {
        name: "Bone Fragment",
        quantity: 5,
      },
      {
        name: "Moss",
        quantity: 2,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/9/96/Challenge_Bait.png",
    completed: false,
  },
  {
    name: "Crab Pot",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 40,
      },
      {
        name: "Iron Bar",
        quantity: 3,
      },
      {
        name: "Wood",
        quantity: 25,
      },
      {
        name: "Copper Bar",
        quantity: 2,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/9/92/Crab_Pot.png",
    completed: false,
  },
  {
    name: "Sturdy Ring",
    type: "Cooking",
    materials: [
      {
        name: "Copper Bar",
        quantity: 2,
      },
      {
        name: "Bug Meat",
        quantity: 25,
      },
      {
        name: "Slime",
        quantity: 25,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/7/7e/Sturdy_Ring.png",
    completed: false,
  },
  {
    name: "Warrior Ring",
    type: "Cooking",
    materials: [
      {
        name: "Iron Bar",
        quantity: 10,
      },
      {
        name: "Coal",
        quantity: 25,
      },
      {
        name: "Frozen Tear",
        quantity: 10,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/1/13/Warrior_Ring.png",
    completed: false,
  },
  {
    name: "Ring of Yoba",
    type: "Cooking",
    materials: [
      {
        name: "Gold Bar",
        quantity: 5,
      },
      {
        name: "Iron Bar",
        quantity: 5,
      },
      {
        name: "Diamond",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/2/21/Ring_of_Yoba.png",
    completed: false,
  },
  {
    name: "Thorns Ring",
    type: "Cooking",
    materials: [
      {
        name: "Bone Fragment",
        quantity: 50,
      },
      {
        name: "Stone",
        quantity: 50,
      },
      {
        name: "Gold Bar",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/5/5b/Thorns_Ring.png",
    completed: false,
  },
  {
    name: "Glowstone Ring",
    type: "Cooking",
    materials: [
      {
        name: "Solar Essence",
        quantity: 5,
      },
      {
        name: "Iron Bar",
        quantity: 5,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/6/65/Glowstone_Ring.png",
    completed: false,
  },
  {
    name: "Iridium Band",
    type: "Cooking",
    materials: [
      {
        name: "Iridium Bar",
        quantity: 5,
      },
      {
        name: "Solar Essence",
        quantity: 50,
      },
      {
        name: "Void Essence",
        quantity: 50,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/7/77/Iridium_Band.png",
    completed: false,
  },
  {
    name: "Wedding Ring",
    type: "Cooking",
    materials: [
      {
        name: "Iridium Bar",
        quantity: 5,
      },
      {
        name: "Prismatic Shard",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/f/fe/Wedding_Ring.png",
    completed: false,
  },
  {
    name: "Field Snack",
    type: "Cooking",
    materials: [
      {
        name: "Acorn",
        quantity: 1,
      },
      {
        name: "Maple Seed",
        quantity: 1,
      },
      {
        name: "Pine Cone",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/1/1b/Field_Snack.png",
    completed: false,
  },
  {
    name: "Bug Steak",
    type: "Cooking",
    materials: [
      {
        name: "Bug Meat",
        quantity: 10,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/b/b7/Bug_Steak.png",
    completed: false,
  },
  {
    name: "Life Elixir",
    type: "Cooking",
    materials: [
      {
        name: "Red Mushroom",
        quantity: 1,
      },
      {
        name: "Purple Mushroom",
        quantity: 1,
      },
      {
        name: "Morel",
        quantity: 1,
      },
      {
        name: "Chanterelle",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/6/6e/Life_Elixir.png",
    completed: false,
  },
  {
    name: "Oil of Garlic",
    type: "Cooking",
    materials: [
      {
        name: "Garlic",
        quantity: 10,
      },
      {
        name: "Oil",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/4/4b/Oil_of_Garlic.png",
    completed: false,
  },
  {
    name: "Monster Musk",
    type: "Cooking",
    materials: [
      {
        name: "Bat Wing",
        quantity: 30,
      },
      {
        name: "Slime",
        quantity: 30,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/a/af/Monster_Musk.png",
    completed: false,
  },
  {
    name: "Fairy Dust",
    type: "Cooking",
    materials: [
      {
        name: "Diamond",
        quantity: 1,
      },
      {
        name: "Fairy Rose",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/f/fc/Fairy_Dust.png",
    completed: false,
  },
  {
    name: "Warp Totem: Beach",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 1,
      },
      {
        name: "Coral",
        quantity: 2,
      },
      {
        name: "Fiber",
        quantity: 10,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/2/2f/Warp_Totem_Beach.png",
    completed: false,
  },
  {
    name: "Warp Totem: Mountains",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 1,
      },
      {
        name: "Iron Bar",
        quantity: 1,
      },
      {
        name: "Stone",
        quantity: 25,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/d/d8/Warp_Totem_Mountains.png",
    completed: false,
  },
  {
    name: "Warp Totem: Farm",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 1,
      },
      {
        name: "Honey",
        quantity: 1,
      },
      {
        name: "Fiber",
        quantity: 20,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/e/e4/Warp_Totem_Farm.png",
    completed: false,
  },
  {
    name: "Warp Totem: Desert",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 2,
      },
      {
        name: "Coconut",
        quantity: 1,
      },
      {
        name: "Iridium Ore",
        quantity: 4,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/8/83/Warp_Totem_Desert.png",
    completed: false,
  },
  {
    name: "Warp Totem: Island",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 5,
      },
      {
        name: "Dragon Tooth",
        quantity: 1,
      },
      {
        name: "Ginger",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/b/b9/Warp_Totem_Island.png",
    completed: false,
  },
  {
    name: "Rain Totem",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 1,
      },
      {
        name: "Truffle Oil",
        quantity: 1,
      },
      {
        name: "Pine Tar",
        quantity: 5,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/f/f7/Rain_Totem.png",
    completed: false,
  },
  {
    name: "Treasure Totem",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 5,
      },
      {
        name: "Mystic Syrup",
        quantity: 1,
      },
      {
        name: "Moss",
        quantity: 10,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/0/06/Treasure_Totem.png",
    completed: false,
  },
  {
    name: "Torch",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 1,
      },
      {
        name: "Sap",
        quantity: 2,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/b/b2/Torch.png",
    completed: false,
  },
  {
    name: "Campfire",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 10,
      },
      {
        name: "Wood",
        quantity: 10,
      },
      {
        name: "Fiber",
        quantity: 10,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/0/01/Campfire.png",
    completed: false,
  },
  {
    name: "Wooden Brazier",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 10,
      },
      {
        name: "Coal",
        quantity: 1,
      },
      {
        name: "Fiber",
        quantity: 5,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/3/34/Wooden_Brazier.png",
    completed: false,
  },
  {
    name: "Stone Brazier",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 10,
      },
      {
        name: "Coal",
        quantity: 1,
      },
      {
        name: "Fiber",
        quantity: 5,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/1/1a/Stone_Brazier.png",
    completed: false,
  },
  {
    name: "Gold Brazier",
    type: "Cooking",
    materials: [
      {
        name: "Gold Bar",
        quantity: 1,
      },
      {
        name: "Coal",
        quantity: 1,
      },
      {
        name: "Fiber",
        quantity: 5,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/b/b7/Gold_Brazier.png",
    completed: false,
  },
  {
    name: "Carved Brazier",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 10,
      },
      {
        name: "Coal",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/3/3c/Carved_Brazier.png",
    completed: false,
  },
  {
    name: "Stump Brazier",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 5,
      },
      {
        name: "Coal",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/f/f2/Stump_Brazier.png",
    completed: false,
  },
  {
    name: "Barrel Brazier",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 50,
      },
      {
        name: "Solar Essence",
        quantity: 1,
      },
      {
        name: "Coal",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/7/78/Barrel_Brazier.png",
    completed: false,
  },
  {
    name: "Skull Brazier",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 10,
      },
      {
        name: "Solar Essence",
        quantity: 1,
      },
      {
        name: "Coal",
        quantity: 1,
      },
      {
        name: "Bone Fragment",
        quantity: 10,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/e/e6/Skull_Brazier.png",
    completed: false,
  },
  {
    name: "Marble Brazier",
    type: "Cooking",
    materials: [
      {
        name: "Marble",
        quantity: 1,
      },
      {
        name: "Aquamarine",
        quantity: 1,
      },
      {
        name: "Stone",
        quantity: 100,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/e/e0/Marble_Brazier.png",
    completed: false,
  },
  {
    name: "Wood Lamp-post",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 50,
      },
      {
        name: "Battery Pack",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/c/c8/Wood_Lamp-post.png",
    completed: false,
  },
  {
    name: "Iron Lamp-post",
    type: "Cooking",
    materials: [
      {
        name: "Iron Bar",
        quantity: 1,
      },
      {
        name: "Battery Pack",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/b/b0/Iron_Lamp-post.png",
    completed: false,
  },
  {
    name: "Jack-O-Lantern",
    type: "Cooking",
    materials: [
      {
        name: "Pumpkin",
        quantity: 1,
      },
      {
        name: "Torch",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/1/17/Jack-O-Lantern.png",
    completed: false,
  },
  {
    name: "Charcoal Kiln",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 20,
      },
      {
        name: "Copper Bar",
        quantity: 2,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/7/76/Charcoal_Kiln.png",
    completed: false,
  },
  {
    name: "Crystalarium",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 99,
      },
      {
        name: "Gold Bar",
        quantity: 5,
      },
      {
        name: "Iridium Bar",
        quantity: 2,
      },
      {
        name: "Battery Pack",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/6/63/Crystalarium.png",
    completed: false,
  },
  {
    name: "Furnace",
    type: "Cooking",
    materials: [
      {
        name: "Copper Ore",
        quantity: 20,
      },
      {
        name: "Stone",
        quantity: 25,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/0/0f/Furnace.png",
    completed: false,
  },
  {
    name: "Heavy Furnace",
    type: "Cooking",
    materials: [
      {
        name: "Furnace",
        quantity: 2,
      },
      {
        name: "Iron Bar",
        quantity: 3,
      },
      {
        name: "Stone",
        quantity: 50,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/a/a9/Heavy_Furnace.png",
    completed: false,
  },
  {
    name: "Lightning Rod",
    type: "Cooking",
    materials: [
      {
        name: "Iron Bar",
        quantity: 1,
      },
      {
        name: "Refined Quartz",
        quantity: 1,
      },
      {
        name: "Bat Wing",
        quantity: 5,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/6/62/Lightning_Rod.png",
    completed: false,
  },
  {
    name: "Solar Panel",
    type: "Cooking",
    materials: [
      {
        name: "Refined Quartz",
        quantity: 10,
      },
      {
        name: "Iron Bar",
        quantity: 5,
      },
      {
        name: "Gold Bar",
        quantity: 5,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/5/5d/Solar_Panel.png",
    completed: false,
  },
  {
    name: "Recycling Machine",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 25,
      },
      {
        name: "Stone",
        quantity: 25,
      },
      {
        name: "Iron Bar",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/2/26/Recycling_Machine.png",
    completed: false,
  },
  {
    name: "Seed Maker",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 25,
      },
      {
        name: "Coal",
        quantity: 10,
      },
      {
        name: "Gold Bar",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/1/19/Seed_Maker.png",
    completed: false,
  },
  {
    name: "Slime Incubator",
    type: "Cooking",
    materials: [
      {
        name: "Iridium Bar",
        quantity: 2,
      },
      {
        name: "Slime",
        quantity: 100,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/c/c0/Slime_Incubator.png",
    completed: false,
  },
  {
    name: "Ostrich Incubator",
    type: "Cooking",
    materials: [
      {
        name: "Bone Fragment",
        quantity: 50,
      },
      {
        name: "Hardwood",
        quantity: 50,
      },
      {
        name: "Cinder Shard",
        quantity: 20,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/5/51/Ostrich_Incubator.png",
    completed: false,
  },
  {
    name: "Slime Egg-Press",
    type: "Cooking",
    materials: [
      {
        name: "Coal",
        quantity: 25,
      },
      {
        name: "Fire Quartz",
        quantity: 1,
      },
      {
        name: "Battery Pack",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/7/79/Slime_Egg-Press.png",
    completed: false,
  },
  {
    name: "Tapper",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 40,
      },
      {
        name: "Copper Bar",
        quantity: 2,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/d/da/Tapper.png",
    completed: false,
  },
  {
    name: "Heavy Tapper",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 30,
      },
      {
        name: "Radioactive Bar",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/0/0c/Heavy_Tapper.png",
    completed: false,
  },
  {
    name: "Worm Bin",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 15,
      },
      {
        name: "Gold Bar",
        quantity: 1,
      },
      {
        name: "Iron Bar",
        quantity: 1,
      },
      {
        name: "Fiber",
        quantity: 50,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/7/71/Worm_Bin.png",
    completed: false,
  },
  {
    name: "Deluxe Worm Bin",
    type: "Cooking",
    materials: [
      {
        name: "Worm Bin",
        quantity: 1,
      },
      {
        name: "Moss",
        quantity: 30,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/e/ea/Deluxe_Worm_Bin.png",
    completed: false,
  },
  {
    name: "Bone Mill",
    type: "Cooking",
    materials: [
      {
        name: "Bone Fragment",
        quantity: 10,
      },
      {
        name: "Clay",
        quantity: 3,
      },
      {
        name: "Stone",
        quantity: 20,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/c/cc/Bone_Mill.png",
    completed: false,
  },
  {
    name: "Geode Crusher",
    type: "Cooking",
    materials: [
      {
        name: "Gold Bar",
        quantity: 2,
      },
      {
        name: "Stone",
        quantity: 50,
      },
      {
        name: "Diamond",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/0/02/Geode_Crusher.png",
    completed: false,
  },
  {
    name: "Mushroom Log",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 10,
      },
      {
        name: "Moss",
        quantity: 10,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/3/39/Mushroom_Log.png",
    completed: false,
  },
  {
    name: "Bait Maker",
    type: "Cooking",
    materials: [
      {
        name: "Iron Bar",
        quantity: 3,
      },
      {
        name: "Coral",
        quantity: 3,
      },
      {
        name: "Sea Urchin",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/c/c0/Bait_Maker.png",
    completed: false,
  },
  {
    name: "Tub o' Flowers",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 15,
      },
      {
        name: "Tulip Bulb",
        quantity: 1,
      },
      {
        name: "Jazz Seeds",
        quantity: 1,
      },
      {
        name: "Poppy Seeds",
        quantity: 1,
      },
      {
        name: "Spangle Seeds",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/d/d9/Tub_o%27_Flowers.png",
    completed: false,
  },
  {
    name: "Wicked Statue",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 25,
      },
      {
        name: "Coal",
        quantity: 5,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/4/4a/Wicked_Statue.png",
    completed: false,
  },
  {
    name: "Flute Block",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 10,
      },
      {
        name: "Copper Ore",
        quantity: 2,
      },
      {
        name: "Fiber",
        quantity: 20,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/3/31/Flute_Block.png",
    completed: false,
  },
  {
    name: "Drum Block",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 10,
      },
      {
        name: "Copper Ore",
        quantity: 2,
      },
      {
        name: "Fiber",
        quantity: 20,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/d/dc/Drum_Block.png",
    completed: false,
  },
  {
    name: "Chest",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 50,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/b/b3/Chest.png",
    completed: false,
  },
  {
    name: "Stone Chest",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 50,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/1/1b/Stone_Chest.png",
    completed: false,
  },
  {
    name: "Big Chest",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 120,
      },
      {
        name: "Copper Bar",
        quantity: 2,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/8/89/Big_Chest.png",
    completed: false,
  },
  {
    name: "Big Stone Chest",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 250,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/a/a6/Big_Stone_Chest.png",
    completed: false,
  },
  {
    name: "Wood Sign",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 25,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/c/ce/Wood_Sign.png",
    completed: false,
  },
  {
    name: "Stone Sign",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 25,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/f/f3/Stone_Sign.png",
    completed: false,
  },
  {
    name: "Dark Sign",
    type: "Cooking",
    materials: [
      {
        name: "Bat Wing",
        quantity: 5,
      },
      {
        name: "Bone Fragment",
        quantity: 5,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/7/72/Dark_Sign.png",
    completed: false,
  },
  {
    name: "Text Sign",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 25,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/9/93/Text_Sign.png",
    completed: false,
  },
  {
    name: "Garden Pot",
    type: "Cooking",
    materials: [
      {
        name: "Clay",
        quantity: 1,
      },
      {
        name: "Stone",
        quantity: 10,
      },
      {
        name: "Refined Quartz",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/2/2c/Garden_Pot.png",
    completed: false,
  },
  {
    name: "Scarecrow",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 50,
      },
      {
        name: "Coal",
        quantity: 1,
      },
      {
        name: "Fiber",
        quantity: 20,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/7/75/Scarecrow.png",
    completed: false,
  },
  {
    name: "Deluxe Scarecrow",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 50,
      },
      {
        name: "Fiber",
        quantity: 40,
      },
      {
        name: "Iridium Ore",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/5/59/Deluxe_Scarecrow.png",
    completed: false,
  },
  {
    name: "Staircase",
    type: "Cooking",
    materials: [
      {
        name: "Stone",
        quantity: 99,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/8/8c/Staircase.png",
    completed: false,
  },
  {
    name: "Explosive Ammo (5)",
    type: "Cooking",
    materials: [
      {
        name: "Iron Bar",
        quantity: 1,
      },
      {
        name: "Coal",
        quantity: 2,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/f/f3/Explosive_Ammo.png",
    completed: false,
  },
  {
    name: "Transmute (Fe)",
    type: "Cooking",
    materials: [
      {
        name: "Copper Bar",
        quantity: 3,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/6/6c/Iron_Bar.png",
    completed: false,
  },
  {
    name: "Transmute (Au)",
    type: "Cooking",
    materials: [
      {
        name: "Iron Bar",
        quantity: 2,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Gold_Bar.png",
    completed: false,
  },
  {
    name: "Mini-Jukebox",
    type: "Cooking",
    materials: [
      {
        name: "Iron Bar",
        quantity: 2,
      },
      {
        name: "Battery Pack",
        quantity: 1,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/0/02/Mini-Jukebox.png",
    completed: false,
  },
  {
    name: "Mini-Obelisk",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 30,
      },
      {
        name: "Solar Essence",
        quantity: 20,
      },
      {
        name: "Gold Bar",
        quantity: 3,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/c/c9/Mini-Obelisk.png",
    completed: false,
  },
  {
    name: "Farm Computer",
    type: "Cooking",
    materials: [
      {
        name: "Dwarf Gadget",
        quantity: 1,
      },
      {
        name: "Battery Pack",
        quantity: 1,
      },
      {
        name: "Refined Quartz",
        quantity: 10,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/f/f8/Farm_Computer.png",
    completed: false,
  },
  {
    name: "Hopper",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 10,
      },
      {
        name: "Iridium Bar",
        quantity: 1,
      },
      {
        name: "Radioactive Bar",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/8/81/Hopper.png",
    completed: false,
  },
  {
    name: "Cookout Kit",
    type: "Cooking",
    materials: [
      {
        name: "Wood",
        quantity: 15,
      },
      {
        name: "Fiber",
        quantity: 10,
      },
      {
        name: "Coal",
        quantity: 3,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/9/91/Cookout_Kit.png",
    completed: false,
  },
  {
    name: "Tent Kit",
    type: "Cooking",
    materials: [
      {
        name: "Hardwood",
        quantity: 10,
      },
      {
        name: "Fiber",
        quantity: 25,
      },
      {
        name: "Cloth",
        quantity: 1,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/0/05/Tent_Kit.png",
    completed: false,
  },
  {
    name: "Statue Of The Dwarf King",
    type: "Cooking",
    materials: [
      {
        name: "Iridium Bar",
        quantity: 20,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/e/e4/Statue_Of_The_Dwarf_King.png",
    completed: false,
  },
  {
    name: "Statue Of Blessings",
    type: "Cooking",
    materials: [
      {
        name: "Sap",
        quantity: 999,
      },
      {
        name: "Fiber",
        quantity: 999,
      },
      {
        name: "Stone",
        quantity: 999,
      },
      {
        name: "Moss",
        quantity: 333,
      },
    ],
    image:
      "https://stardewvalleywiki.com/mediawiki/images/e/e9/Statue_Of_Blessings.png",
    completed: false,
  },
  {
    name: "Anvil",
    type: "Cooking",
    materials: [
      {
        name: "Iron Bar",
        quantity: 50,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/d/dd/Anvil.png",
    completed: false,
  },
  {
    name: "Mini-Forge",
    type: "Cooking",
    materials: [
      {
        name: "Dragon Tooth",
        quantity: 5,
      },
      {
        name: "Iron Bar",
        quantity: 10,
      },
      {
        name: "Gold Bar",
        quantity: 10,
      },
      {
        name: "Iridium Bar",
        quantity: 5,
      },
    ],
    image: "https://stardewvalleywiki.com/mediawiki/images/6/6c/Mini-Forge.png",
    completed: false,
  },
];

export default craftingRecipes;
