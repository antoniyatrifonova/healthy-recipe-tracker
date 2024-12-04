import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeComponent } from './recipe.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RecipesService } from 'src/shared/services/recipes.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeComponent, RouterTestingModule],
      providers: [
        RecipesService,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
