import { RecipeModel } from './../recipes.model';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    private readonly recipeService: RecipeService,
    private readonly router: Router
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

  public onCancel() {
    this.router.navigate(['../'], { relativeTo: this.activatedRouter });
  }

  public onSubmit() {
    const newRecipe: RecipeModel = new RecipeModel(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients'],
      Math.random() * 100
    );

    this.editMode
      ? this.recipeService.updateRecipe(this.id, newRecipe)
      : this.recipeService.addRecipe(newRecipe);

    this.onCancel();
  }

  private initForm() {
    let recipeName: string = '';
    let recipeImagePath: string = '';
    let recipeDescription: string = '';
    let recipeIngredients: FormArray = new FormArray([]);
    if (this.editMode) {
      const recipe: RecipeModel = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.getName();
      recipeImagePath = recipe.getImagePath();
      recipeDescription = recipe.getDescription();
      if (recipe['ingredients']) {
        recipe.getIngredients().forEach((ingredient) =>
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.getName(), [
                Validators.required,
              ]),
              amount: new FormControl(ingredient.getAmount(), [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          )
        );
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, [Validators.required]),
      imagePath: new FormControl(recipeImagePath, [Validators.required]),
      description: new FormControl(recipeDescription, [Validators.required]),
      ingredients: recipeIngredients,
    });
  }

  public onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, [Validators.required]),
        amount: new FormControl([
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  public getArrayControl(): Array<AbstractControl> {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }
}
