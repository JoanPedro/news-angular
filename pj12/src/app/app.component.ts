import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders: Array<String> = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username':  new FormControl(null, [ Validators.required ]),
        'email': new FormControl(null, [
            Validators.required,
            Validators.email
          ]
        )
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control: FormControl = new FormControl(null, [ Validators.required ]);
    (this.signupForm.get('hobbies') as FormArray).push(control);
  }
}
