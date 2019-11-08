import { Injectable } from '@angular/core';
import { Car } from './models/car.model'
import { HttpClient } from '@angular/common/http';
import { getLocaleNumberSymbol } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private hhtp: HttpClient) { 
    //getCarsByYearMakeModelTrim(): Observable<Car[]>{
      //return this.hhtp.get<Car[]("")
    //}
  }
}
