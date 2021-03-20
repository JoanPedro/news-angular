export class Ingredient {
  constructor(
    private readonly name: string,
    private readonly amoumt: number
  ) {}

  getName(): String {
    return this.name;
  }

  getAmount(): Number {
    return this.amoumt;
  }
}
