import { Injectable } from '@angular/core';
import { Car } from './models/car.model'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private hhtp: HttpClient) { 
    
  }
}
