import { Ingredient } from './shared/ingredient.model';
export class RecipeModel {
  constructor(
    private readonly name: string,
    private readonly description: string,
    private readonly imagePath: string,
    private readonly ingredients: Array<Ingredient>,
    private readonly id: number
  ) {}

  getName: () => string = () => {
    return this.name;
  };

  getDescription: () => string = () => {
    return this.description;
  };

  getImagePath: () => string = () => {
    return this.imagePath;
  };

  getIngredients: () => Array<Ingredient> = () => {
    return this.ingredients;
  };

  getId: () => number = () => {
    return this.id;
  };
}
