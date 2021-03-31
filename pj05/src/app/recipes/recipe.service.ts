import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { RecipeModel } from './recipes.model';
import { Ingredient } from './shared/ingredient.model';

@Injectable()
export class RecipeService {
  private recipes: Array<RecipeModel> = [
    new RecipeModel(
      'Tasty Beef',
      ' A super-tasty Baby Beef - just awesome!',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Salad', 1),
      ],
      0
    ),
    new RecipeModel(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ],
      1
    )
  ];

  constructor(private readonly shoppingListService: ShoppingListService) {}

  public getRecipe: () => Array<RecipeModel> = () => {
    // Retorna uma cópia do Array. -> Imutabilidade
    return this.recipes.slice();
  }

  public getRecipeById: (id: number) => RecipeModel = (id) => {
    return this.getRecipe().find( model => model.getId() === id );
  }

  public addIngredientToShoppingList: (ingredients: Array<Ingredient>) => void = (ingredients) => {
    this.shoppingListService.addIngredientsHere(ingredients);
  }
}
