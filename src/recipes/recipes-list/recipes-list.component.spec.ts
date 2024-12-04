import { TestBed } from '@angular/core/testing';
import { RecipesListComponent } from './recipes-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RecipesService } from 'src/shared/services/recipes.service';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

describe('RecipesListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesListComponent, RouterTestingModule],
      providers: [
        RecipesService,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RecipesListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
