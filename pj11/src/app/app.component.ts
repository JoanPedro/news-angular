import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm) {
    const formValue: SimpleForm = form.value;
    console.log(formValue)
  }
}

export type SimpleForm = {
  email: String,
  secret: String,
  username: String
}
