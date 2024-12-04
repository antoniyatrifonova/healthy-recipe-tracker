import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth, Auth } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { SidenavListComponent } from 'src/navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from 'src/navigation/header/header.component';
import { environment } from 'src/environments/environment';
import { MaterialModel } from 'src/shared/material.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        AppComponent,
        SidenavListComponent,
        HeaderComponent,
        MaterialModel,
      ],
      providers: [
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth()),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
