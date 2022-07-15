import { Component, OnInit } from '@angular/core';
import { MutualFundNAV } from '../models/mutualfundNAV';
import { MutualFundNAVService } from '../services/mutualfundNAV.service';


@Component({
  selector: 'app-dailymutualfund-nav',
  templateUrl: './dailymutualfund-nav.component.html',
  styleUrls: ['./dailymutualfund-nav.component.css']
})
export class DailymutualfundNAVComponent implements OnInit {
  
  
  mfNAV:MutualFundNAV;
  mfInfo: any;
  constructor(private mutualfundnavservice:MutualFundNAVService)
   { 
    this.mfNAV = new MutualFundNAV();
   }

  ngOnInit(): void 
  {

  }

  mfData()
  {
    this.mutualfundnavservice.dailymfnavCheck(this.mfNAV).subscribe((data)=>{
      console.log(data);
      this.mfInfo=data;
  });
  }

}
