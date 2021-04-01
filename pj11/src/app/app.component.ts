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
  genders: Array<String> = ['male', 'female'];

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
    const form: NgForm = this.signupForm;

    console.log("Custom: " + formValue);
    console.log("Grouped: " + form)
  }
}

type SimpleForm = {
  email: String,
  secret: String,
  username: String,
  questionAnswer: String
}
