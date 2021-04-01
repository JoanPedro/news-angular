import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('formObject', { static: false })
  signupForm: NgForm;
  answer: String;

  defaultQuestion: String = 'pet';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   const formValue: SimpleForm = form.value;
  //   console.log(formValue)
  // }

  onSubmit() {
    const formValue: SimpleForm = this.signupForm.value;
    console.log(formValue)
  }
}

type SimpleForm = {
  email: String,
  secret: String,
  username: String,
  questionAnswer: String
}
