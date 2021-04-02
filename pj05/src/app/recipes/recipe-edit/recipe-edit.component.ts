import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;

  recipeForm: FormGroup;

  constructor(
    private readonly activatedRouter: ActivatedRoute,
    private readonly recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params: Params) => {
      this.id = +params['id'];

      // IF HAS ID -> IN EDIT MODE BECAUSE ROUTE .../1/edit
      // IF NOT -> ../edit. IT DOESN'T HAVE ID
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName: string = '';
    let recipeImagePath: string = '';
    let recipeDescription: string = '';
    if (this.editMode) {
      recipeName = this.recipeService.getRecipeById(this.id).getName();
      recipeImagePath = this.recipeService
        .getRecipeById(this.id)
        .getImagePath();
      recipeDescription = this.recipeService
        .getRecipeById(this.id)
        .getDescription();
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImagePath),
      recipeDescription: new FormControl(recipeDescription),
    });
  }
}
