import { Component, OnInit } from '@angular/core';
import { Dealer } from 'src/app/modelsAPI/dealer.model';
import { DealerService } from '../dealer.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-adddealer',
  templateUrl: './adddealer.component.html',
  styleUrls: ['./adddealer.component.scss']
})
export class AdddealerComponent implements OnInit {


  submitted = false;
  model = new Dealer('','','','','','','','','','');
  params : Params;
  type : String = null;

  constructor(private router: Router, private _dealerService: DealerService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.params = params; 
    });
    if(this.params.id != null){
      this.getdDealer();
      this.type = "Update"
    }else{
      this.type = "Add"
    }
    
  }

  getdDealer(){
    this._dealerService.getCarById(this.params.id)
    .subscribe(result => {
      this.model = result;
    });
  }



  onSubmit() {
    this.submitted = true;
    if(this.params.id != null) {
      this._dealerService.putDealer(this.model).subscribe();
    }else {
      this._dealerService.addDealer(this.model).subscribe();
    }
    this.router.navigate(['/dealers']);
  }

  ngOnInit() {
  }

}
