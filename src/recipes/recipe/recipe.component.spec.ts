import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeComponent } from './recipe.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { RecipesService } from 'src/shared/services/recipes.service';

describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RecipeComponent,
        RouterTestingModule,
        AngularFireModule.initializeApp({
          apiKey: 'mock-api-key',
          authDomain: 'mock-auth-domain',
          projectId: 'mock-project-id',
          storageBucket: 'mock-storage-bucket',
          messagingSenderId: 'mock-sender-id',
          appId: 'mock-app-id',
        })
      ],
      providers: [
        { provide: AngularFirestore, useValue: {} },
        { provide: RecipesService, useValue: {} },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
