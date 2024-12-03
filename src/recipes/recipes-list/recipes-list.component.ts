import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MaterialModel } from '../../shared/material.module';
import { Recipe } from '../../shared/model/recipe';
import { RecipesService } from '../../shared/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModel,
  ]
})
export class RecipesListComponent implements OnInit {

  recipes$: Observable<{ allRecipes: Recipe[], mostRatedRecipes: Recipe[] }>;

  constructor(private recipesService: RecipesService) {
    this.recipes$ = this.getRecipes();
  }

  private getRecipes(): Observable<{ allRecipes: Recipe[], mostRatedRecipes: Recipe[] }> {
    return this.recipesService.getRecipes().pipe(
      map((recipes) => {
        const recipesWithDefaultRating = recipes.map(recipe => ({
          ...recipe,
          rating: recipe.rating || { averageRating: 0, totalVotes: 0 }
        }));

        const mostRatedRecipes = recipesWithDefaultRating
          .filter(recipe => recipe.rating.totalVotes > 50)
          .sort((a, b) => b.rating.averageRating - a.rating.averageRating)
          .slice(0, 3);

          const allRecipes = recipesWithDefaultRating;

        return { allRecipes, mostRatedRecipes };
      })
    );
  }


  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}

}
