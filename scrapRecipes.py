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
            for row in rows[1:]:
                columns = row.find_all('td')
                if len(columns) >= 4:
                    name = columns[1].text.strip()
                    image_cell = columns[0]
                    image_tag = image_cell.find('img')
                    image_url_based = '//https://stardewvalleywiki.com/'+image_tag['src']
                    image_url = image_url_based if image_tag else None
                    ingredients = []
                    ingredient_cell = columns[3]
                    for ingredient_text in ingredient_cell.stripped_strings:
                        if ingredient_text != "(Any)":
                            quantity_match = re.search(r'\d+(\.\d+)?', ingredient_text) 
                            quantity = quantity_match.group() if quantity_match else None
                            ingredient_split = ingredient_text.split('(', 1)
                            if len(ingredient_split) == 2:
                                ingredient_name = ingredient_split[0].strip()
                            else:
                                ingredient_name = ingredient_text.strip()
                            ingredients.append({'name': ingredient_name, 'quantity': quantity})
                    recipe = {'name': name, 'ingredients': ingredients, 'image': image_url}
                    recipes.append(recipe)
                    if name == 'Moss Soup':
                        return recipes
        return recipes
    else:
        print(f"Failed to fetch page: {response.status_code}")

if __name__ == "__main__":
    wiki_url = "https://stardewvalleywiki.com/Cooking"
    recipes = scrape_recipes(wiki_url)
    print(recipes[0])
