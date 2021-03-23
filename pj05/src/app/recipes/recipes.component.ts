import { RecipeModel } from './recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: RecipeModel;

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedRecipe(recipeEvent: RecipeModel) {
    this.selectedRecipe = recipeEvent;
  }
}
