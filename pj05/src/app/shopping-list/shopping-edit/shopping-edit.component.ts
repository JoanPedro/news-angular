import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../recipes/shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  handleAddButton(form: NgForm) {
    console.log(form);
    const value = form.value;
    this.shoppingListService.addIngredients(
      new Ingredient(value.name, value.amount)
    );
  }
}
