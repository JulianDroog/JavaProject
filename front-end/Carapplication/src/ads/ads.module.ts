import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads/ads.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [AdsComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class AdsModule { }
