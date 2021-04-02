import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
  static invalidProjectName(control: FormControl): { [key: string]: boolean } {
    if (control.value === "Test") return { invalidProjectName: true };

    return null;
  }

  static asyncInvalidProjectName(
    control: FormControl
  ): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        control.value === "Testproject"
          ? resolve({ invalidProjectName: true })
          : resolve(null);
      }, 2000);
    });
  }
}
