import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/navigation/header/header.component';
import { SidenavListComponent } from 'src/navigation/sidenav-list/sidenav-list.component';
import { MaterialModel } from 'src/shared/material.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MaterialModel, RouterModule, HeaderComponent, SidenavListComponent],
})
export class AppComponent implements OnInit {
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
