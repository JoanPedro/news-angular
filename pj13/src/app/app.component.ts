import { CustomValidators } from "./custom-validators";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  // When passing as reference method that uses "this", ensure that its an arrow function or bind
  // this! aka. (.bind(this)) on method reference calls.

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        [CustomValidators.asyncInvalidProjectName]
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl("critical", [Validators.required]),
    });
  }

  onSaveProject() {
    console.log(this.projectForm.value);
  }
}
