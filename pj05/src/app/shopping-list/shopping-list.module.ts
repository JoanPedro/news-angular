import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    ShoppingListComponent
  ],
  providers: [],
  bootstrap: [ShoppingListComponent]
})
export class ShoppingListModule {}
