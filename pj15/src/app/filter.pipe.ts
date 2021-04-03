import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(values: Array<any>, filterString: string, propName: string): any {
    if (values.length === 0 || filterString === "") return values;

    return values
      .filter((value) => value[propName] === filterString)
      .map((value) => value);
  }
}
