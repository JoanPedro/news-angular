export class Ingredient {
  constructor(private readonly name: string, private readonly amount: number) {}

  getName: () => string = () => {
    return this.name;
  };

  getAmount: () => number = () => {
    return this.amount;
  };
}
