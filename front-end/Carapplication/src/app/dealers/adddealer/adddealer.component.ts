import { Component, OnInit } from '@angular/core';
import { Dealer } from 'src/app/modelsAPI/dealer.model';
import { DealerService } from '../dealer.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddealer',
  templateUrl: './adddealer.component.html',
  styleUrls: ['./adddealer.component.scss']
})
export class AdddealerComponent implements OnInit {


  submitted = false;
  model = new Dealer('','','','','','','','','','');


  constructor(private router: Router, private _dealerService: DealerService) { }


  onSubmit() {
    this.submitted = true;
    this._dealerService.addDealer(this.model).subscribe();
    this.router.navigate(['/dealers']);
    console.log(this.model);

  }

  ngOnInit() {
  }

}
