import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { FormsModule } from '@angular/forms';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    RecipesComponent
  ],
  providers: [],
  bootstrap: [RecipesComponent]
})
export class RecipesModule {}
