import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../models/car.model';
import { Year } from 'src/app/years/models/year.model';
import { YearsService } from 'src/app/years/years.service';
import { FormBuilder, Validators } from '@angular/forms';
import { YearsModule } from 'src/app/years/years.module';
import { MakesService } from 'src/app/makes/makes.service';
import { Make } from 'src/app/makes/models/make.model';
import { ModelsAPIService } from 'src/app/modelsAPI/models-api.service';
import { ModelAPI } from 'src/app/modelsAPI/models/modelAPI.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  car: Car = null;
  yearsMinMax: Year = null;
  allYears: Number[] = [];
  chosenYears: Number[] = [];
  allMakes: string[] = [];
  filterYear: boolean = false;
  chosenMakes: string[] = [];
  allModels: ModelAPI[] = [];

  test: ModelAPI;

  carForm = this.fb.group({
    year: [],
    make: [],
    model: ""
  });
  constructor(private _yearService: YearsService, private _makeService: MakesService, private _modelService: ModelsAPIService, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.getAllYears();
    this.getAllMakes();
  }

  getAllYears() {
    this._yearService.getMinMaxYears().subscribe(result => {
      this.yearsMinMax = new Year(result.Years.min_year, result.Years.max_year);
      console.log(this.yearsMinMax);

      for (var i = Number(this.yearsMinMax.min_year); i <= Number(this.yearsMinMax.max_year); i++) {
        this.allYears.push(i);
      }
    });
  }

  getAllMakes() {
    this._makeService.getMakes().subscribe(result => {
      console.log(result.Makes);
      for (let items of result.Makes) {
        this.allMakes.push(items);
      }
    })
  }

  onSelectionChangeYear(year: Number[]) {
    this.chosenYears = year;
    console.log(this.chosenYears);
    this.showCarModels();
  }

  getMakesByYear(selectedYear: Number): string[] {
    //var listMakes: Make[] = [];
    var listMakes: string[] = [];
    this._makeService.getMakesByYear(selectedYear).subscribe(result => {
      Array.prototype.push.apply(listMakes, result.Makes)
      console.log('getmakesbyyearResult = ' + result.Makes);
      console.log('getmakesbyyear: ' + listMakes);
      // for(let item of result.Makes){
      //   //this.allMakes.push(items.make_display);
      //   listMakes.push(item.make_display);
      // }
    })
    console.log('getmakesbyyear: ' + listMakes);
    return listMakes;
  }

  onSelectionChangeMake(make: string[]) {
    this.chosenMakes = make;
    console.log(this.chosenMakes);
    //  this.allModels = [];
    //   for(let item of this.chosenMakes){
    //     this.allModels = this.getModelsByMake(item);
    //   }
    this.showCarModels();
  }

  showCarModels() {
    this.allModels = [];
    if (this.chosenMakes.length > 0 && this.chosenYears.length > 0) {
      for (let make of this.chosenMakes) {
        for (let year of this.chosenYears) {
          //this.allModels = this.getModelsByMakeAndYear(make.make_id, year);
          this.allModels = this.getModelsByMakeAndYear(make, year);
        }
        console.log('alle modellen bij gekozen jaar en merk:' + this.allModels);
      }
    }
    if (this.chosenMakes.length == 0 && this.chosenYears.length > 0) {
      // In de API kunnen we geen Models ophalen met alleen het jaartal als parameter, Make/Merk is nodig
      // Om dit toch mogelijk te maken halen we eerst het make/merk op dat een model heeft gemaakt in een bepaald jaar
      // daarna kunnen we van die merken de models wel ophalen
      // var listMakes: Make[] = [];
      var listMakes: string[] = [];
      for (let year of this.chosenYears) {
        //listMakes = this.getMakesByYear(year);
        this._makeService.getMakesByYear(year).subscribe(result => {
          Array.prototype.push.apply(listMakes, result);
          console.log('listmakes= ' + listMakes);
          for (let make of listMakes) {
            // this.allModels = this.getModelsByMake(make.make_id);
            this.allModels = this.getModelsByMake(make);
          }
         });
        //Array.prototype.push.apply(listMakes, this.getMakesByYear(year));
        console.log('listmakes= ' + listMakes);
      }
     
    }
    if (this.chosenMakes.length > 0 && this.chosenYears.length == 0) { //chosenMakes.length > 0 && chosenYears.length = 0
      for (let make of this.chosenMakes) {
        //this.allModels = this.getModelsByMake(make.make_id);
        this.allModels = this.getModelsByMake(make);
        console.log('modellen bij gekozen merk: ' + this.allModels);
      }
      console.log('modellen bij gekozen merk: ' + this.allModels);
    }
  }

  getModelsByMake(make: string): ModelAPI[] {
    var listModelsByMake: ModelAPI[] = [];
    this._modelService.getModelsByMake(make).subscribe(result => {
      Array.prototype.push.apply(listModelsByMake, result.Models);
      console.log('models test ****: ' + listModelsByMake);
    });
    return listModelsByMake;
  }

  //  getModelsByYear(year: Number){ //alleen op jaar ophalen werkt niet bij api
  //   this._modelService.getModelsByYear(year).subscribe(result => {
  //     console.log(result);
  //     for(let model of result.Models) {
  //       this.test = new ModelAPI(model.model_name, model.model_make_id);
  //       this.allModels.push(this.test);
  //     }
  //     console.log('models test ****: ' + this.allModels);
  //   });

  // }

  getModelsByMakeAndYear(makeID: string, year: Number): ModelAPI[] {
    var listModelsByMakeAndYear: ModelAPI[] = [];
    this._modelService.getModelsByMakeAndYear(makeID, year).subscribe(result => {
      Array.prototype.push.apply(listModelsByMakeAndYear, result.Models);
      console.log('getModelsByMakeAndyear' + listModelsByMakeAndYear);
    })
    return listModelsByMakeAndYear;
  }
}
