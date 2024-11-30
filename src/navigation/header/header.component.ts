import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MaterialModel } from '../../shared/material.module';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModel,
    FlexLayoutModule
  ]
})
export class HeaderComponent {

  constructor(public auth: AuthService) {}

  @Output() sidenavToggle = new EventEmitter<void>();

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
