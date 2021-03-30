import { Ingredient } from './shared/ingredient.model';
export class RecipeModel {
  constructor(
    private readonly name: string,
    private readonly description: string,
    private readonly imagePath: string,
    private readonly ingredients: Array<Ingredient>,
    private readonly id: number
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

  getId(): Number {
    return this.id;
  }
}
