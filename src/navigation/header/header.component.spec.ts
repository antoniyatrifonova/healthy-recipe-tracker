import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthService } from 'src/shared/services/auth.service';

const mockAuthService = {
  login: jasmine.createSpy('login').and.returnValue(of(true)),
  logout: jasmine.createSpy('logout').and.returnValue(of(true)),
  currentUser: of(null),
};

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeaderComponent, RouterTestingModule ],
      providers: [{ provide: AuthService, useValue: mockAuthService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
