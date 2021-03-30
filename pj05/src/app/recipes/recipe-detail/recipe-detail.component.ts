import { RecipeService } from './../recipe.service';
import { imageStyle } from './styles/image';
import { RecipeModel } from './../recipes.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: RecipeModel;

  imageStyle = imageStyle;

  constructor(
    private readonly recipeService: RecipeService,
    private readonly activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // NOT DYNAMIC. THE ROUTE PATH CHANGE BUT THE COMPONENT, NOT. THIS DON'T CALL
    // ON INIT ANYMORE. ONLY CALLS ONCE. SO, USE OBSERVABLE PATTERN TO TURNS REACTIVITY

    // const id: number = +this.activatedRoute.snapshot.params['id'];
    // this.recipe = this.recipeService.getRecipeById(id);

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        const id: number = +params['id'];
        this.recipe = this.recipeService.getRecipeById(id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.getIngredients());
  }
}
