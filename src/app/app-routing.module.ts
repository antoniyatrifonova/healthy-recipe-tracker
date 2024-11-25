import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

// /home - welcome page
// /login
// /signup
// /recipes - lazy loading page ?? - show list with all recipes
// /recipes/:id - detailed information for a recipe
// /meal-planner - meal planner view when the user is login
// /profile - show user profile

const routes: Routes = [
  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
