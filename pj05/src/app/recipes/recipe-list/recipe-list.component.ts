import { Component, OnInit } from '@angular/core';

import { RecipeService } from './../recipe.service';
import { RecipeModel } from './../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<RecipeModel>;

  constructor(private readonly recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
  }
}
