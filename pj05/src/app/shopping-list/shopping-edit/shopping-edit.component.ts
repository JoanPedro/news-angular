import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from './../../recipes/shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(private readonly shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
      }
    );
  }

  handleAddButton(form: NgForm) {
    console.log(form);
    const value = form.value;
    this.shoppingListService.addIngredients(
      new Ingredient(value.name, value.amount)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
