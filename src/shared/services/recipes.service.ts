import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from '../model/recipe';
import {
  Firestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipesCollection = collection(this.firestore, 'recipes');

  constructor(private firestore: Firestore) {}

  getRecipes(): Observable<Recipe[]> {
    return from(getDocs(this.recipesCollection)).pipe(
      map((querySnapshot) => {
        return querySnapshot.docs.map((doc) => {
          const data = doc.data() as Recipe;
          return {
            ...data,
            id: doc.id,
          };
        });
      })
    );
  }

  getRecipeById(id: string): Observable<Recipe | null> {
    const recipeDocRef = doc(this.firestore, `recipes/${id}`);
    return from(getDoc(recipeDocRef)).pipe(
      map((docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data() as Recipe;
          return { ...data, id: docSnapshot.id };
        } else {
          return null;
        }
      })
    );
  }
}
