import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('templateForm')
  shoppingListForm: NgForm;

  private subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private readonly shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.getName(),
          amount: this.editedItem.getAmount(),
        });
      }
    );
  }

  handleAddButton(form: NgForm) {
    const value = form.value;
    const newIngredient: Ingredient = new Ingredient(value.name, value.amount);
    this.editMode
      ? this.shoppingListService.updateIngredient(
          this.editedItemIndex,
          newIngredient
        )
      : this.shoppingListService.addIngredients(newIngredient);

    this.editMode = false;

    form.reset();
  }

  handleClearButton(form: NgForm) {
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
