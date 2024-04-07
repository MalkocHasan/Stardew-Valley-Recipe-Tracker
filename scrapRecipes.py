import requests
from bs4 import BeautifulSoup
import re

def scrape_recipes(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        recipe_tables = soup.find_all('table', class_='wikitable')

        recipes = []
        for table in recipe_tables:
            rows = table.find_all('tr')
            header_row = rows[0]
            ing_column_number = None
            for i, th in enumerate(header_row.find_all('th')):
                if th.text.strip() == 'Ingredients':
                    ing_column_number = i

            for row in rows[1:]:
                columns = row.find_all('td')
                if len(columns) >= 4:
                    name = columns[1].text.strip()
                    image_cell = columns[0]
                    image_tag = image_cell.find('img')
                    image_url_based = 'https://stardewvalleywiki.com'+image_tag['src']
                    image_url = image_url_based if image_tag else None
                    ingredients = []
                    if(name == 'Gate'):
                        print(columns[ing_column_number])
                    ingredient_cell = columns[ing_column_number]

                    for ingredient_text in ingredient_cell.stripped_strings:
                        if (ingredient_text[0] == '('):
                            quantity_str = ''
                            for i in range(1,len(ingredient_text)-1):
                                if (ingredient_text[i] != ')'):
                                    quantity_str += ingredient_text[i]
                            ingredients.append({'name': ingredient_name, 'quantity': quantity_str})
                        else:
                            ingredient_name = ingredient_text.strip()
                        
                    
                    
                    recipe = {'name': name, 'materials': ingredients, 'image': image_url}
                    recipes.append(recipe)
                    #if name == 'Moss Soup':
                     #   return recipes
        return recipes
    else:
        print(f"Failed to fetch page: {response.status_code}")

if __name__ == "__main__":
    wiki_url = "https://stardewvalleywiki.com/Crafting"
    recipes = scrape_recipes(wiki_url)
    import json
    # print(recipes)
    # Assuming 'recipes' is a list of dictionaries containing recipe information

    # Print recipes as JSON
    # print(json.dumps(recipes, indent=4))

    # Write recipes to a JSON file
    with open('recipes.json', 'w') as json_file:
        json.dump(recipes, json_file, indent=4)
    print("Recipes saved to 'recipes.json' file.")

