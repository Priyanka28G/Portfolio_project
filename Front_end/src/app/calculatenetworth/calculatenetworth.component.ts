import { Component, OnInit } from '@angular/core';
import { Calculatenetworth } from '../models/calculatenetworth';
import { Mutual } from '../models/mutualfund';
import { Stock } from '../models/stock';
import { CalculatenetworthService } from '../services/calculatenetworth.service';

@Component({
  selector: 'app-calculatenetworth',
  templateUrl: './calculatenetworth.component.html',
  styleUrls: ['./calculatenetworth.component.css']
})
export class CalculatenetworthComponent implements OnInit {

  calculatenetworth:Calculatenetworth;
  portfolioInfo:any;
  constructor(private calculatenetworthservice:CalculatenetworthService) 
  {
    this.calculatenetworth = new Calculatenetworth();
    this.calculatenetworth.stockList[0]= new Stock();
    this.calculatenetworth.mutualFundList[0]= new Mutual();
  }

  ngOnInit(): void {
  }

  networth()
  {
      this.calculatenetworthservice.networthCheck(this.calculatenetworth).subscribe((data)=>{
      console.log(data); 
      this.portfolioInfo=data;
    });
  }

}
