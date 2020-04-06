import { Recipe } from './recipe.model'
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'A delicious test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('AnotherTest Recipe', 'A delicious test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
      ];
    getRecipes() {
        return this.recipes.slice();
    }
}