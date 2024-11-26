import { Component, OnInit } from '@angular/core';
import { RecipesService } from './services/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'healthy-recipe-tracker';

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
      this.recipesService.addRecipe();
      this.recipesService.addRecipe();
      this.recipesService.addRecipe();
  }
}
