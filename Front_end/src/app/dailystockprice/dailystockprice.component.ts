import { Component, OnInit } from '@angular/core';
import { Dailystockprice } from '../models/dailystockprice';
import { DailystockpriceService } from '../services/dailystockprice.service';

@Component({
  selector: 'app-dailystockprice',
  templateUrl: './dailystockprice.component.html',
  styleUrls: ['./dailystockprice.component.css']
})
export class DailystockpriceComponent implements OnInit 
{

  dailystockprice:Dailystockprice;
  stockInfo: any;
  constructor(private dailystockpriceservice:DailystockpriceService) 
  { 
    this.dailystockprice = new Dailystockprice();
  }

  ngOnInit(): void 
  {
  }
  stockData()
  {
      this.dailystockpriceservice.dailystockpriceCheck(this.dailystockprice).subscribe((data)=>{
      console.log(data); 
      this.stockInfo=data;
  });
  }
}