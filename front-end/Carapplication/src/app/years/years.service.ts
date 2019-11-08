import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Year } from './models/year.model';

@Injectable({
  providedIn: 'root'
})
export class YearsService {

  constructor(private http: HttpClient) { }
  getMinMaxYears():any {
    return this.http.jsonp("https://www.carqueryapi.com/api/0.3/?cmd=getYears",'callback');
  }
}
