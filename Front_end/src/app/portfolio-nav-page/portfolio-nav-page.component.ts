import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-nav-page',
  templateUrl: './portfolio-nav-page.component.html',
  styleUrls: ['./portfolio-nav-page.component.css']
})
export class PortfolioNavPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  getNetworth(){
    this.router.navigate(["portfolio"]);
  }
  getsellasset(){
    this.router.navigate(["sellasset"]);
  }
}
