import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, NgForm } from '@angular/forms';

import { MaterialModel } from '../../shared/material.module';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MaterialModel,
    FlexLayoutModule
  ]
})
export class SignupComponent {
  onSubmit(form : NgForm) {
    console.log(form);
  }
}
