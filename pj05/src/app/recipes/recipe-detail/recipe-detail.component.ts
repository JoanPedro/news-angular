import { RecipeService } from './../recipe.service';
import { imageStyle } from './styles/image';
import { RecipeModel } from './../recipes.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  recipe: RecipeModel;

  imageStyle = imageStyle;

  constructor(private readonly recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.getIngredients());
  }
}
