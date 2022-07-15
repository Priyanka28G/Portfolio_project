import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Dailystockprice } from "../models/dailystockprice";

@Injectable()
export class DailystockpriceService 
{
    constructor(private http:HttpClient) 
    {
        
    }
    dailystockpriceCheck(dailystockprice:Dailystockprice)
    {
        console.log(dailystockprice)
        
        return this.http.get("http://localhost:58451/api/Stock/"+dailystockprice.StockName);
        //return this.http.get("http://localhost:58451/api/Stock/"+dailystockprice.StockName);
    }
    
}