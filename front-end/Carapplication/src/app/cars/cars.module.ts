import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars/cars.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatButtonModule, MatSelectModule, MatOptionModule, MatInputModule, MatDividerModule, MatListModule, MatCheckboxModule, MatExpansionModule, MatCardModule } from '@angular/material';


@NgModule({
  declarations: [CarsComponent],
  imports: [
    CommonModule, FormsModule,
    MatFormFieldModule, 
    MatButtonModule, MatSelectModule, ReactiveFormsModule, MatInputModule, MatOptionModule, MatDividerModule, MatListModule, MatCheckboxModule, MatExpansionModule, MatCardModule
  ],
  exports: [
    CarsComponent
  ],schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CarsModule { }
