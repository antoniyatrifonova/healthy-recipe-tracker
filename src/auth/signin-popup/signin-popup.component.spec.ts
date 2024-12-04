import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninPopupComponent } from './signin-popup.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('SigninPopupComponent', () => {
  let component: SigninPopupComponent;
  let fixture: ComponentFixture<SigninPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninPopupComponent, MatDialogModule],
      providers: [
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth()),
        {
          provide: MatDialogRef,
          useValue: {
            close: jasmine.createSpy('close'),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SigninPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
