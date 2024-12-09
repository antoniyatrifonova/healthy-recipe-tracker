import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { Recipe } from '../../shared/model/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class RecipeComponent implements OnInit {
  recipe: Recipe | null = null;
  error = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.recipe = this.route.snapshot.data['recipe'];

    if (!this.recipe) {
      console.error('Failed to load recipe data');
      this.error = true;
    }
  }
}
