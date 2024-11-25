import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthService } from '../../services/auth.service';
import { MaterialModel } from '../../material.module';
import { RouterModule } from '@angular/router';



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
