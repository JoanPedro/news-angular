import { RecipeService } from './../recipe.service';
import { imageStyle } from './styles/image';
import { RecipeModel } from './../recipes.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: RecipeModel;
  id: number;

  imageStyle = imageStyle;

  constructor(
    private readonly recipeService: RecipeService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    // NOT DYNAMIC. THE ROUTE PATH CHANGE BUT THE COMPONENT, NOT. THIS DON'T CALL
    // ON INIT ANYMORE. ONLY CALLS ONCE. SO, USE OBSERVABLE PATTERN TO TURNS REACTIVITY

    // const id: number = +this.activatedRoute.snapshot.params['id'];
    // this.recipe = this.recipeService.getRecipeById(id);

    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipeById(this.id);
      console.log(this.recipe);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(
      this.recipe.getIngredients()
    );
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
