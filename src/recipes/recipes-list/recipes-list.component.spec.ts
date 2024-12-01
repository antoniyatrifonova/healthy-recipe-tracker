import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { of } from 'rxjs';

import { RecipesListComponent } from './recipes-list.component';
import { RecipesService } from 'src/shared/services/recipes.service';


describe('RecipesListComponent', () => {
  let component: RecipesListComponent;
  let fixture: ComponentFixture<RecipesListComponent>;
  let mockRecipesService: jasmine.SpyObj<RecipesService>;

  beforeEach(async () => {
    mockRecipesService = jasmine.createSpyObj('RecipesService', ['getRecipes']);
    mockRecipesService.getRecipes.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [
        RecipesListComponent,
        AngularFireModule.initializeApp({
          apiKey: 'mock-api-key',
          authDomain: 'mock-auth-domain',
          projectId: 'mock-project-id',
          storageBucket: 'mock-storage-bucket',
          messagingSenderId: 'mock-sender-id',
          appId: 'mock-app-id',
        }),
       ],
       providers: [
        { provide: RecipesService, useValue: mockRecipesService },
        { provide: AngularFirestore, useClass: MockAngularFirestore }
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockAngularFirestore {
  collection() {
    return { valueChanges: () => [] };
  }
}
