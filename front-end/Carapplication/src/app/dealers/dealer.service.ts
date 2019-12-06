import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Dealer } from '../modelsAPI/dealer.model';


@Injectable({
  providedIn: 'root'
})
export class DealerService {

  constructor(private http: HttpClient) { }

  getDealers(): Observable<Dealer[]>{
    return this.http.get<Dealer[]>("http://localhost:8762/dealers", {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  addDealer(dealer: Dealer){
    return this.http.post<Dealer>("http://localhost:8762/dealers/dealer",dealer , {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  putDealer(dealer: Dealer){
    return this.http.put<Dealer>("http://localhost:8762/dealers/dealer",dealer, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  deleteDealer(dealerId: string){
    return this.http.delete<Dealer>("http://localhost:8762/dealers/dealer/" + dealerId, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  getCarById(id : string): Observable<Dealer>{
    return this.http.get<Dealer>("http://localhost:8762/dealers/dealer/"+id, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }
}
