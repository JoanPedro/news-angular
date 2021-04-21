import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @ViewChild('formObject', { static: false })
  signupForm!: NgForm;
  generatedUserByForm!: SimpleForm;
  submitted: boolean = false;

  ngOnInit(): void {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   const formValue: SimpleForm = form.value;
  //   console.log(formValue)
  // }

  onSubmit() {
    this.submitted = true;

    const formValue: SimpleForm = this.signupForm.value;
    const form: NgForm = this.signupForm;

    console.log(formValue);
    console.log(form);

    this.generatedUserByForm = this.signupForm.value;

    this.signupForm.reset();
  }
}

type SimpleForm = {
  productData: UserData,
  productCode: string,
  releaseData: string,
  price: number,

}

type UserData = {
  productName: string,
  description: string
}
