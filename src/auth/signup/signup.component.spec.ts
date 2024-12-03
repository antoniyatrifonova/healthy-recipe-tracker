import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { AuthService } from 'src/shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

const mockAngularFireAuth: any = {
  authState: of(null),
  signInWithEmailAndPassword: jasmine.createSpy('signInWithEmailAndPassword').and.returnValue(Promise.resolve()),
  signOut: jasmine.createSpy('signOut').and.returnValue(Promise.resolve()),
};

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SignupComponent, NoopAnimationsModule ],
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
