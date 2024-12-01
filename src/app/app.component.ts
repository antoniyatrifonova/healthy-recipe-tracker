import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../shared/services/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'healthy-recipe-tracker';

  constructor(private recipesService: RecipesService) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    // empty for now
  }
}
