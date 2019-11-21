import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModelsAPIService {

  constructor(private http: HttpClient) { }

  getModelsByMakeAndYear(make: string, year: Number):any {
    return this.http.jsonp("https://www.carqueryapi.com/api/0.3/??&cmd=getModels&make=" + make + "&year=" + year,'callback');
  }

  getModelsByMake(make: string):any {
    return this.http.jsonp("https://www.carqueryapi.com/api/0.3/??&cmd=getModels&make=" + make ,'callback');
  }

  getModelsByYear(year: Number){
    return this.http.jsonp("https://www.carqueryapi.com/api/0.3/??&cmd=getModels&year=" + year ,'callback');
  }
}
