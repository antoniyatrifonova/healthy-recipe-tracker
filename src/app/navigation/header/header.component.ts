import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
