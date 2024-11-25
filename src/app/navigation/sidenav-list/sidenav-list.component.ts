import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
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
