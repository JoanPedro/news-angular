export class Ingredient {
  constructor(
    private readonly name: String,
    private readonly amoumt: Number
  ) {}

  getName(): String {
    return this.name;
  }

  getAmount(): Number {
    return this.amoumt;
  }
}
