import { Component } from '@angular/core';

import { AuthService } from '../../shared/services/auth.service';
import { MaterialModel } from 'src/shared/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MaterialModel,
    FlexLayoutModule,
    RouterModule,
  ],
})
export class LoginComponent {
  isLoading = false;
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(form: NgForm) {
    if (form.invalid) return;

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    this.authService.login(email, password).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        this.isLoading = false;
        this.error = 'Login failed. Please check your credentials.';
        console.error('Login error:', err);
      },
    });
  }
}
