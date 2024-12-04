import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogRef } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { MaterialModel } from 'src/shared/material.module';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-signin-popup',
  standalone: true,
  imports: [MaterialModel, RouterModule, FlexLayoutModule],
  templateUrl: './signin-popup.component.html',
  styleUrl: './signin-popup.component.scss',
})
export class SigninPopupComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private dialogRef: MatDialogRef<SigninPopupComponent>
  ) {}

  loginWithGoogle(): void {
    this.authService.googleLogin().subscribe({
      next: (user) => {
        if (user) {
          this.router.navigate(['/profile']);
        }
        this.dialogRef.close();
      },
      error: (err) => {
        console.error('Google login failed', err);
        this.dialogRef.close();
      },
    });
  }

  openEmailLogin() {
    this.dialogRef.close();
    this.router.navigate(['/login']);
  }

  openRegister() {
    this.router.navigate(['/signup']);
    this.dialogRef.close();
  }
}
