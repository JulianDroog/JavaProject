import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';
import { Year } from 'src/app/years/models/year.model';
import { YearsService } from 'src/app/years/years.service';
import { FormBuilder, Validators } from '@angular/forms';
import { YearsModule } from 'src/app/years/years.module';
import { MakesService } from 'src/app/makes/makes.service';
import { Make } from 'src/app/makes/models/make.model';
import { ModelsAPIService } from 'src/app/modelsAPI/models-api.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  car: Car = null;
  yearsMinMax: Year = null;
  allYears: Number[] = []; 
  chosenYear: string = "";
  //make: Make = null;
  listMakes: string[] = [];
  //showMake: boolean = false;
  filterYear: boolean = false;
  chosenMake: string = "";
  
  carForm = this.fb.group({
    year: "" ,
    make: ""
  });
  constructor(private _yearService: YearsService, private _makeService: MakesService, private _modelService: ModelsAPIService, private fb: FormBuilder) { 
    
  }

  ngOnInit() {
    this.getAllYears();
    this.getMakes();
  }

  getAllYears() {
    this._yearService.getMinMaxYears().subscribe(result => {
      this.yearsMinMax = new Year(result.Years.min_year, result.Years.max_year);
      console.log(this.yearsMinMax);

      for(var i = Number(this.yearsMinMax.min_year); i <= Number(this.yearsMinMax.max_year); i++){
        this.allYears.push(i);
     }
    });
    }

    onSelectionChangeYear(year: string) {
      this.chosenYear = year;
      console.log(year);
      console.log(this.chosenYear);
      this.getMakesByYear(this.chosenYear);
      }

     getMakes(){
      this._makeService.getMakes().subscribe(result => {
        console.log(result.Makes);
        for(let items of result.Makes){
          this.listMakes.push(items.make_display);
        }
      })
      }

    getMakesByYear(selectedYear: string){
      this._makeService.getMakesByYear(selectedYear).subscribe(result => {
        console.log(result.Makes);
        for(let items of result.Makes){
          this.listMakes.push(items.make_display);
        }
      })
    }
    onSelectionChangeMake(make: string) {
      console.log(make);
      this.chosenMake = make;
      console.log(this.chosenMake);
     // this.getModelsByMake(this.chosenMake);
      }
      
      getModelsByMake(make: string){
       this._modelService.getModelsByMake(make)
     }

    

  //getCarByMake(){
  //this.car = this._carService.getCarsByMake();
  //}


}
