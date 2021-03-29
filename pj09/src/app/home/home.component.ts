import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) { }

  ngOnInit() {
  }

  onLoadServers(id: number) {
    // Complex LOGIC . . .
    this.router.navigate(['/servers', id, 'edit'], {
      queryParams: { allowEdit: '1'},
      fragment: 'loading'
    })
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.loggout();
  }
}
