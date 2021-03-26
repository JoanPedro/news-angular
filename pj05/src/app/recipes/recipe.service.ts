import { EventEmitter } from '@angular/core';

import { RecipeModel } from './recipes.model';
import { Ingredient } from './shared/ingredient.model';

export class RecipeService {
  private recipeSelected = new EventEmitter<RecipeModel>();

  private recipes: Array<RecipeModel> = [
    new RecipeModel(
      'Tasty Beef',
      ' A super-tasty Baby Beef - just awesome!',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Salad', 1),
      ]
    ),
    new RecipeModel(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ]
    )
  ];

  public getRecipe: () => Array<RecipeModel> = () => {
    // Retorna uma cópia do Array. -> Imutabilidade
    return this.recipes.slice();
  }

  public getRecipeSelected: () => EventEmitter<RecipeModel> = () => {
    return this.recipeSelected;
  }
}
