import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from 'src/app/services/recipes.service';
import { MaterialModel } from 'src/app/material.module';
import { Recipe } from '../../shared/model/recipe';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MaterialModel,
  ]
})
export class RecipesListComponent implements OnInit {

  recipes$: Observable<{ allRecipes: Recipe[], mostRatedRecipes: Recipe[] }>;

  constructor(private recipesService: RecipesService) {
    this.recipes$ = this.recipesService.getRecipes().pipe(
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


  ngOnInit(): void {}

}
