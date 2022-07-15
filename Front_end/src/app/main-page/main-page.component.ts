import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  
})

export class MainPageComponent implements OnInit {
  //@Input() currentMsgFromChild1ToChild2: any [];
  constructor(private router:Router) { 
    
  }

  ngOnInit(): void 
  {
  }

  getStock()
  {
    this.router.navigate(["todaystockprice"]);
  }
  getMutual()
  {
    this.router.navigate(["mutualfundnav"]);
  }
  getPortfolio()
  {
    this.router.navigate(["portfolioNavpage"]);
  }
}
