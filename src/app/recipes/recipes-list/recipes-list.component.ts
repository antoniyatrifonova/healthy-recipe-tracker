import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe';
import { RecipesService } from 'src/app/services/recipes.service';
import { MaterialModel } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MaterialModel,
    FlexLayoutModule
  ]
})
export class RecipesListComponent implements OnInit {

  recipes: Observable<Recipe[]>;

  constructor(private recipesService: RecipesService) {
    this.recipes = this.recipesService.getRecipes();
  }

  ngOnInit(): void {}

}
