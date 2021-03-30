import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;

  constructor(
    private readonly activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];

          // IF HAS ID -> IN EDIT MODE BECAUSE ROUTE .../1/edit
          // IF NOT -> ../edit. IT DOESN'T HAVE ID
          this.editMode = params['id'] != null;
        }
      )
  }

}
