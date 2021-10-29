import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-vendehumos';
  estaLogueado: boolean = false;

  constructor(private authService: AuthService) {}

  login() {
    const token = Math.random().toString()
    this.authService.setToken(token)
    this.estaLogueado = true;
  }

  logout() {
    this.authService.removeToken()
    this.estaLogueado = false;
  }
}
