import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModel } from 'src/shared/material.module';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [MaterialModel, CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  stars: string[] = [];

  ngOnChanges() {
    this.stars = [];
    const fullStars = Math.floor(this.rating);
    const hasHalfStar = this.rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      this.stars.push('filled');
    }

    if (hasHalfStar) {
      this.stars.push('half-filled');
    }

    while (this.stars.length < 5) {
      this.stars.push('empty');
    }

    console.log(this.stars);
  }
}
