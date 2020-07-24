import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('french fries', 23),
      ]),
    new Recipe('Another Recipe',
      'This is simply a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg',
      [
        new Ingredient('potato', 1),
        new Ingredient('ice cream', 23),
      ]),
  ];
  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsSL(ingredients);
  }
}
