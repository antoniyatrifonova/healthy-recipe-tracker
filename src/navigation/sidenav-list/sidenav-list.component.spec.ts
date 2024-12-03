import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavListComponent } from './sidenav-list.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthService } from 'src/shared/services/auth.service';

const mockAuthService = {
  login: jasmine.createSpy('login').and.returnValue(of(true)),
  logout: jasmine.createSpy('logout').and.returnValue(of(true)),
  currentUser: of(null),
};

describe('SidenavListComponent', () => {
  let component: SidenavListComponent;
  let fixture: ComponentFixture<SidenavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SidenavListComponent, RouterTestingModule ],
      providers: [{ provide: AuthService, useValue: mockAuthService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
