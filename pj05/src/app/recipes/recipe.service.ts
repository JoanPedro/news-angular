import { EventEmitter } from '@angular/core';

import { RecipeModel } from './recipes.model';

export class RecipeService {
  private recipeSelected = new EventEmitter<RecipeModel>();

  private recipes: Array<RecipeModel> = [
    new RecipeModel(
      'A Test recipe',
      ' This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new RecipeModel(
      'Another Test recipe',
      ' This is simply another test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
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
