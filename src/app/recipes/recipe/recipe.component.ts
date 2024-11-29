import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/shared/model/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RecipeComponent implements OnInit {

  recipe!: Observable<Recipe | undefined>;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('id');

    if (recipeId) {
      this.recipe = this.recipesService.getRecipeById(recipeId);
    } else {
      console.error('Recipe ID is undefined');
      this.router.navigate(['/recipes']);
    }
  }
}
