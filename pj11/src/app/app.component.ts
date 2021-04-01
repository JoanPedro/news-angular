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
  defaultGender: String = 'male';

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
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
    const formValue: SimpleForm = this.signupForm.value;
    const form: NgForm = this.signupForm;

    console.log(formValue);
    console.log(form);
  }
}

type SimpleForm = {
  userData: UserData,
  secret: String,
  questionAnswer: String,
  gender: String
}

type UserData = {
  username: String,
  email: String
}
