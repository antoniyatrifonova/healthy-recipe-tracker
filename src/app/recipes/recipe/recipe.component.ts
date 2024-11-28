import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Recipe } from '../../shared/model/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class RecipeComponent {
  recipe: Recipe = {
    title: '',
    portions: 1,
    ingredients: [],
    caloriesPerPortion: 0,
    proteinPerPortion: 0,
    carbsPerPortion: 0,
    fatsPerPortion: 0,
    instructions: "",
    author: "",
    tags: [],
  };
}
