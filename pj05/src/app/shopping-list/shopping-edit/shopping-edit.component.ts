import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../recipes/shared/ingredient.model';
import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput')
  nameInput: ElementRef;

  @ViewChild('amountInput')
  amountInput: ElementRef;

  constructor(private readonly shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  handleAddButton() {
    const ingredientName: String = (this.nameInput.nativeElement as HTMLInputElement).value;
    const ingredientAmount: Number = Number.parseInt((this.amountInput.nativeElement as HTMLInputElement).value);
    this.shoppingListService.addIngredients(new Ingredient (ingredientName, ingredientAmount));
  }
}
