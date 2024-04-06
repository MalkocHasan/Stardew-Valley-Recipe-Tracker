import json

# Load JSON data from file
with open('recipes.json', 'r') as file:
    recipes_data = json.load(file)

# Iterate through each recipe and convert to desired format
formatted_recipes = []
for recipe in recipes_data:
    formatted_recipe = {
        "name": recipe["name"],
        "type": "Cooking",  # Assuming all recipes are crafting type, adjust if needed
        "materials": [
            {"name": material["name"], "quantity": int(material["quantity"])} for material in recipe["materials"]
        ],
        "image": recipe["image"][2:],  # Adjust image URL if needed
        "completed": False  # Assuming all recipes are not completed initially
    }
    formatted_recipes.append(formatted_recipe)

# Print formatted recipes (or do whatever else you need with them)
with open('formatted_recipes.json', 'w') as output_file:
    json.dump(formatted_recipes, output_file, indent=2)
