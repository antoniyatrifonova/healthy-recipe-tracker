import { TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth, Auth } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/shared/services/auth.service';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

const mockAuth = {
  authState: of(null),
  signInWithEmailAndPassword: jasmine
    .createSpy('signInWithEmailAndPassword')
    .and.returnValue(Promise.resolve()),
  signOut: jasmine.createSpy('signOut').and.returnValue(Promise.resolve()),
};

describe('SignupComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupComponent, RouterTestingModule],
      providers: [
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth()),
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SignupComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
