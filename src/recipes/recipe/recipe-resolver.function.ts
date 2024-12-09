import { ResolveFn } from '@angular/router';
import { Recipe } from '../../shared/model/recipe';
import { RecipesService } from '../../shared/services/recipes.service';
import { inject } from '@angular/core';

export const recipeResolver: ResolveFn<Recipe | null> = (route) => {
  const recipeService = inject(RecipesService);
  const id = route.paramMap.get('id');
  return id ? recipeService.getRecipeById(id) : null;
};
