import { Component } from '@angular/core';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  onLogin(): void {
    this.authService.login();
  }

}
