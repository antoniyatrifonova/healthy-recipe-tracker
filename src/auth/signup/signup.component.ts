import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, NgForm } from '@angular/forms';

import { MaterialModel } from '../../shared/material.module';
import { AuthService } from 'src/shared/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModel, FlexLayoutModule],
})
export class SignupComponent {
  isLoading = false;
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
    // empty for now
  }

  onSignup(form: NgForm) {
    if (form.invalid) return;

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    this.authService.register(email, password).subscribe(
      () => {
        this.router.navigate(['/profile']);
      },
      (err) => {
        this.isLoading = false;
        this.error = 'Signup failed. Please try again.';
      }
    );
  }
}
