import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { Route, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DailystockpriceComponent } from './dailystockprice/dailystockprice.component';
import { DailystockpriceService } from './services/dailystockprice.service';
import { DailymutualfundNAVComponent } from './dailymutualfund-nav/dailymutualfund-nav.component';
import { MutualFundNAVService } from './services/mutualfundNAV.service';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageService } from './services/mainpage.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeService } from './services/welcome.service';
import { CalculatenetworthComponent } from './calculatenetworth/calculatenetworth.component';
import { CalculatenetworthService } from './services/calculatenetworth.service';
import { PortfolioNavPageComponent } from './portfolio-nav-page/portfolio-nav-page.component';
import { AssetSellComponent } from './asset-sell/asset-sell.component';
import { SellAssetService } from './services/sellasset.service';
import { DatePipe } from '@angular/common';



var myRoutes:Route[]=[
  {path:'todaystockprice',component:DailystockpriceComponent},
  {path:'login',component:LoginComponent},
  {path:'mutualfundnav',component:DailymutualfundNAVComponent},
  {path:'mainpage',component:MainPageComponent},
  {path:'portfolio',component:CalculatenetworthComponent},
  {path:'',component:WelcomeComponent},
  {path:'portfolioNavpage',component:PortfolioNavPageComponent},
  {path:'sellasset', component:AssetSellComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DailystockpriceComponent,
    DailymutualfundNAVComponent,
    MainPageComponent,
    WelcomeComponent,
    CalculatenetworthComponent,
    PortfolioNavPageComponent,
    AssetSellComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
    NgbModule
  ],
  providers: 
  [ UserService,
    DailystockpriceService,
    MutualFundNAVService,
    MainPageService,
    WelcomeService,
    CalculatenetworthService,
    SellAssetService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule 
{
  //currentMsgFromChild1ToChild2 : any;
}
// function fwdMsgToSib2($event:any) 
// { 
//   this.currentMsgFromChild1ToChild2 = $event; 
// }

