import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { Recipe } from '../../shared/model/recipe';
import { LoadingService } from 'src/loading/loading.service';

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

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingService.show();
    setTimeout(() => {
      this.recipe = this.route.snapshot.data['recipe'];
      this.loadingService.hide();

      if (!this.recipe) {
        console.error('Failed to load recipe data');
        this.error = true;
      }
    }, 1000);
  }
}
