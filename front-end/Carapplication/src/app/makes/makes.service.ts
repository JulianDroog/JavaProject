import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MakesService {

  constructor(private http: HttpClient) { }
  getMakesByYear(year: string):any {
    return this.http.jsonp("https://www.carqueryapi.com/api/0.3/?&cmd=getMakes&year=" + year,'callback');
  }
}
