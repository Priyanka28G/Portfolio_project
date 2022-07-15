import { Component, OnInit } from '@angular/core';
import { Mutual } from '../models/mutualfund';
import { SellAsset } from '../models/sellasset';
import { Stock } from '../models/stock';
import { SellAssetService } from '../services/sellasset.service';

@Component({
  selector: 'app-asset-sell',
  templateUrl: './asset-sell.component.html',
  styleUrls: ['./asset-sell.component.css']
})
export class AssetSellComponent implements OnInit {

  sellasset:SellAsset;
  assetInfo:any;
  constructor(private sellassetservice:SellAssetService) 
  {
    this.sellasset = new SellAsset();
    this.sellasset.stockList[0]= new Stock();
    this.sellasset.mutualFundList[0]= new Mutual();
  }

  ngOnInit(): void {
  }
  
  assetnetworth()
  {
      this.sellassetservice.assetnetworthCheck(this.sellasset).subscribe((data)=>{
      console.log(data); 
      this.assetInfo=data;
    });
  }
  getValue(val:string)
  {
    console.warn(val);
  }

  
}
