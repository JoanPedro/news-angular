import { Subject } from 'rxjs';

import { Ingredient } from './../recipes/shared/ingredient.model';

export class ShoppingListService {
  private ingredientAdded: Subject<Array<Ingredient>> = new Subject<
    Array<Ingredient>
  >();
  startedEditing = new Subject<number>();

  private ingredients: Array<Ingredient> = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ];

  public getIngredients: () => Array<Ingredient> = () => {
    return this.ingredients.slice();
  };

  public getIngredient(index: number) {
    return this.ingredients[index];
  }

  public addIngredients: (ingredient: Ingredient) => void = (ingredient) => {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.getIngredients());
  };

  public getIngredientAdd: () => Subject<Array<Ingredient>> = () => {
    return this.ingredientAdded;
  };

  public deleteIngredient(index: number) {
    console.log(index);
    this.ingredients.splice(index, 1);
    this.ingredientAdded.next(this.getIngredients());
  }

  public addIngredientsHere: (ingredients: Array<Ingredient>) => void = (
    ingredients
  ) => {
    // ingredients.forEach(ingredient => this.addIngredients(ingredient));
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.getIngredients());
  };

  public updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
