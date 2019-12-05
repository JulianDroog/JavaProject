import { Component, OnInit } from '@angular/core';
import { DealerService } from './dealer.service';
import { Dealer } from '../modelsAPI/dealer.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.scss']
})
export class DealersComponent implements OnInit {
  dealers: Dealer[] = [];
  dealer: Dealer;

  constructor(private _dealerService: DealerService) {

  }

  ngOnInit() {
    this.getAllDealers();
    console.log(this.dealers);
  }

  getAllDealers() {
    this._dealerService.getDealers().subscribe(result =>{this.dealers = result});
  }
  deleteDealer(dealer: Dealer){
    console.log(dealer);
    this._dealerService.deleteDealer(dealer._id).subscribe(result =>{
      this.getAllDealers();
    });
  }


  
}
