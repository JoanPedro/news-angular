import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = '';

  public isEmpty: (value: String) => Boolean = (value) => {
    console.log(value.length > 0)
    return value.length === 0;
  }

  public clearUserName: () => void = () => {
    this.userName = '';
  }
}
