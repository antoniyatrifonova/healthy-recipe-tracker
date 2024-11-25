import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { MaterialModel } from '../../material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModel
  ]
})
export class SidenavListComponent {

  @Output() closeSidenav = new EventEmitter<void>();

  constructor(public auth: AuthService) {}

  onClose() {
    this.closeSidenav.emit();
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
