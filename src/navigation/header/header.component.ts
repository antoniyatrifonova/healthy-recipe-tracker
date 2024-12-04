import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Router, RouterModule } from '@angular/router';

import { MaterialModel } from '../../shared/material.module';
import { AuthService } from '../../shared/services/auth.service';
import { SigninPopupComponent } from 'src/auth/signin-popup/signin-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModel, FlexLayoutModule],
})
export class HeaderComponent {
  constructor(public auth: AuthService, private dialog: MatDialog) {}

  @Output() sidenavToggle = new EventEmitter<void>();

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  openSignInPopup() {
    this.dialog.open(SigninPopupComponent, {
      width: '400px',
    });
  }

  logout() {
    this.auth.logout();
  }
}
