import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Dealer } from '../modelsAPI/dealer.model';


@Injectable({
  providedIn: 'root'
})
export class DealerService {

  constructor(private http: HttpClient) { }

  getDealers(): Observable<Dealer[]>{
    return this.http.get<Dealer[]>("http://localhost:8050/dealers/all");
  }
}
