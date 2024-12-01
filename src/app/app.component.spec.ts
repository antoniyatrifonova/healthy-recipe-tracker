import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { RecipesService } from 'src/shared/services/recipes.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavListComponent } from 'src/navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from 'src/navigation/header/header.component';
import { MaterialModel } from 'src/shared/material.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp({
          apiKey: 'mock-api-key',
          authDomain: 'mock-auth-domain',
          projectId: 'mock-project-id',
          storageBucket: 'mock-storage-bucket',
          messagingSenderId: 'mock-sender-id',
          appId: 'mock-app-id',
        }),
        BrowserAnimationsModule,
        SidenavListComponent,
        HeaderComponent,
        MaterialModel
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AngularFirestore, useValue: {} },
        { provide: RecipesService, useValue: {} },
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
