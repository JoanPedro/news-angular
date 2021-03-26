import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../recipes/shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Array<Ingredient>;

  constructor(private readonly shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.getIngredientAdd()
      .subscribe(
        (ingredients: Array<Ingredient>) => {
          this.ingredients = ingredients;
        }
      );
  }
}
