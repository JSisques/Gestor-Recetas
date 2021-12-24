import requests
from bs4 import BeautifulSoup

WEB_URL = 'https://recetasdecocina.elmundo.es/tabla-calorias'

def main():

    r = requests.get(WEB_URL)
    soup = BeautifulSoup(r.text, 'html')

    rows = soup.find_all('tr')

    ingredients = []

    for row in rows:
        cells = row.find_all('td')
        ingredients.append((cells[0].text, cells[1].text))

    for ingredient in ingredients:
        insert = "INSERT INTO INGREDIENT (NAME, CALORIES_PER_100_GRAMS) VALUES('" + ingredient[0] + "', " + ingredient[1] + ");\n"
        
        if ingredient[1].__len__() < 5:
            with open('./server/scripts/database/insert_ingredients.sql', 'a', encoding='utf-8') as f:
                f.write(insert)
    
if __name__ == '__main__':
    main()