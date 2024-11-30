import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from "rxjs";

import { Recipe } from "../model/recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipesCollection = this.firestore.collection<Recipe>('recipes');

  constructor(private firestore: AngularFirestore) {}

  public addRecipe(): void {
    const sampleRecipe: Recipe = {
      title: "Healthy Avocado Salad",
      ingredients: [
        { name: "Avocado", quantity: 2, unit: "pieces" },
        { name: "Tomato", quantity: 100, unit: "grams" },
        { name: "Lettuce", quantity: 50, unit: "grams" },
        { name: "Olive Oil", quantity: 2, unit: "tablespoons" }
      ],
      instructions: "Mix all ingredients in a bowl and serve fresh.",
      caloriesPerPortion: 250,
      proteinPerPortion: 3,
      carbsPerPortion: 12,
      fatsPerPortion: 21,
      portions: 4,
      author: "My Author",
      createdAt: new Date(),
      tags: ["salad", "lunch"],
      imageUrl: 'assets/images/recipe1.jpg',
      rating: {
        totalVotes: 100,
        averageRating: 5,
      },
    };

    this.recipesCollection.get().subscribe((snapshot) => {
      const exists = snapshot.docs.some(
        (doc) => doc.data()['title'] === sampleRecipe.title
      );
      if (!exists) {
        this.recipesCollection.add(sampleRecipe).then(() => {
          console.log('Hardcoded recipe added to Firestore');
        });
      }
    });
  }

  getRecipes(): Observable<Recipe[]> {
    return this.recipesCollection.valueChanges({ idField: 'id' });
  }

  public getRecipeById(id: string): Observable<Recipe | undefined> {
    return this.recipesCollection.doc(id).valueChanges();
  }

}
