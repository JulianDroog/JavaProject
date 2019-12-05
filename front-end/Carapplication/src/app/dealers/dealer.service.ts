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
    return this.http.get<Dealer[]>("http://localhost:8050/dealers");
  }

  addDealer(dealer: Dealer){
    return this.http.post<Dealer>("http://localhost:8050/dealers/dealer",dealer);
  }

  putDealer(dealer: Dealer){
    return this.http.put<Dealer>("http://localhost:8050/dealers/dealer",dealer);
  }

  deleteDealer(dealerId: string){
    return this.http.delete<Dealer>("http://localhost:8050/dealers/dealer/" + dealerId);
  }

  getCarById(id : string): Observable<Dealer>{
    return this.http.get<Dealer>("http://localhost:8050/dealers/dealer/"+id);
  }
}
