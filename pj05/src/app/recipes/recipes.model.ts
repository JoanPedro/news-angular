import { Ingredient } from './shared/ingredient.model';
export class RecipeModel {
  constructor(
    private readonly name: string,
    private readonly description: string,
    private readonly imagePath: string,
    private readonly ingredients: Array<Ingredient>
  ) { }

  getName(): String {
    return this.name;
  }

  getDescription(): String {
    return this.description;
  }

  getImagePath(): String {
    return this.imagePath;
  }

  getIngredients(): Array<Ingredient> {
    return this.ingredients;
  }
}
