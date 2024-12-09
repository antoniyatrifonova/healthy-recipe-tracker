import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from '../auth/signup/signup.component';
import { MealPlannerComponent } from '../meal-planner/meal-planner.component';
import { RecipeComponent } from '../recipes/recipe/recipe.component';
import { LoginComponent } from '../auth/login/login.component';
import { ProfileComponent } from '../auth/profile/profile.component';
import { recipeResolver } from 'src/recipes/recipe/recipe-resolver.function';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    loadComponent: () =>
      import('../recipes/recipes-list/recipes-list.component').then(
        (m) => m.RecipesListComponent
      ),
  },
  {
    path: 'recipes/:id',
    component: RecipeComponent,
    resolve: { recipe: recipeResolver },
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'meal-planner',
    component: MealPlannerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
