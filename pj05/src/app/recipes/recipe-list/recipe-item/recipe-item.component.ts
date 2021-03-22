import { RecipeModel } from './../../recipes.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  itemRecipe: RecipeModel;

  constructor() { }

  ngOnInit(): void {
  }

}
