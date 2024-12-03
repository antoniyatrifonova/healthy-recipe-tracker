import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { of } from 'rxjs';
import { AuthService } from 'src/shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const mockAngularFireAuth = {
  authState: of(null),
  signInWithEmailAndPassword: jasmine
    .createSpy('signInWithEmailAndPassword')
    .and.returnValue(Promise.resolve()),
  signOut: jasmine.createSpy('signOut').and.returnValue(Promise.resolve()),
};

const mockActivatedRoute = {
  queryParams: of({ redirectTo: '/profile' }),
};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, NoopAnimationsModule],
      providers: [
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
