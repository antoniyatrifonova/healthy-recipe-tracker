import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MealPlannerComponent } from './meal-planner/meal-planner.component';
import { ProfileComponent } from './auth/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/recipes",
    pathMatch: 'full'
  },
  {
    path: "recipes",
    loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "meal-planner",
    component: MealPlannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
