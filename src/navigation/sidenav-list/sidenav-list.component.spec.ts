import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavListComponent } from './sidenav-list.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidenavListComponent', () => {
  let component: SidenavListComponent;
  let fixture: ComponentFixture<SidenavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SidenavListComponent, RouterTestingModule ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: 'mock-id' } } }
        }
      ]
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
