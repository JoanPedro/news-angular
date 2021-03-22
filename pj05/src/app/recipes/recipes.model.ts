export class RecipeModel {
  constructor(
    private readonly name: string,
    private readonly description: string,
    private readonly imagePath: string
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
}
