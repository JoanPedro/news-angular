import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders: Array<string> = ["male", "female"];
  signupForm: FormGroup;

  forbiddenUsernames = ["Chris", "Anna"];

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          [this.forbiddenEmails]
        ),
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });

    // this.signupForm.valueChanges.subscribe((value) => { console.log(value)});
    this.signupForm.statusChanges.subscribe((value) => {
      console.log(value);
    });

    // this.signupForm.setValue({
    //   userData: {
    //     username: "Max",
    //     email: "max@test.com",
    //   },
    //   gender: "male",
    //   hobbies: [],
    // });
    this.signupForm.patchValue({
      userData: {
        username: "Anna",
      },
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset({ gender: "male" });
  }

  onAddHobby() {
    const control: FormControl = new FormControl(null, [Validators.required]);
    (this.signupForm.get("hobbies") as FormArray).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1)
      return { nameIsForbidden: true };

    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        control.value === "test@test.com"
          ? resolve({ emailIsForbidden: true })
          : resolve(null);
      }, 1500);
    });
  }
}
