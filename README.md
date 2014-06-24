geek-food
=========
An open source recipe database for geeks. 

### Adding a recipe
1. Fork this repository
2. Add a folder to the `/recipes` directory with your username
3. Add a `recipe.json` file to `/recipes/YOURUSERNAME`, and any images to `/recipes/YOURUSERNAME/images`.

### recipes.json example
Here is an example of the format for a `recipe.json` file...

```json
{
    "title": "Delicious Spaghetti",
    "category": "Italian",
    "author": "Jonathan Creamer",
    "prepTime": "20 minutes",
    "cookTime": "At least 2 hours",
    "image": "images/final.jpg",
    "tags": "Dinner, Pasta, Italian, Sauce",
    "ingredients": [{
            "name": "Can of Sauce",
            "quantity": 2
        }, {
            "name": "Can of Paste",
            "quantity": 2
        }, {
            "name": "Can of Puree",
            "quantity": 2
        }],
    "steps": [{
            "description": "Put 2 tbsp of oil and garlic in the crockpot",
            "image": "step-1.jpg"
        }, {
            "description": "Combine all the sauce, paste, and puree",
            "image": "step-2.jpg"
        }, {
            "description": "Sprinkle all the spices to taste",
            "image": "step-3.jpg"
        }]
}

```