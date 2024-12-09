import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoadingService } from './loading.service';
import { MaterialModel } from 'src/shared/material.module';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, MaterialModel],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  isLoading = this.loadingService.loading$;

  constructor(private loadingService: LoadingService) {}
}
