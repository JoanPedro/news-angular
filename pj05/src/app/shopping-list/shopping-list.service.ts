import { EventEmitter } from '@angular/core';
import { Ingredient } from './../recipes/shared/ingredient.model';
export class ShoppingListService {
  private ingredientAdded: EventEmitter<Array<Ingredient>> = new EventEmitter<Array<Ingredient>>();
  private ingredients: Array<Ingredient> = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  public getIngredients: () => Array<Ingredient> = () => {
    return this.ingredients.slice();
  }

  public addIngredients: (ingredient: Ingredient) => void = (ingredient) => {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.getIngredients());
  }

  public getIngredientAdd: () => EventEmitter<Array<Ingredient>> = () => {
    return this.ingredientAdded;
  }
}
