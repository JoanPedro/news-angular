import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from './../recipes/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Array<Ingredient>;
  private IngredientAddedSubject: Subscription;

  constructor(private readonly shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.IngredientAddedSubject = this.shoppingListService.getIngredientAdd()
      .subscribe(
        (ingredients: Array<Ingredient>) => {
          this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy(): void {
    this.IngredientAddedSubject.unsubscribe();
  }
}
