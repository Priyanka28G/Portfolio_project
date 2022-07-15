import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SellAsset } from "../models/sellasset";

@Injectable()
export class SellAssetService 
{
    constructor(private http:HttpClient) 
    {
        
    }
    assetnetworthCheck(sellasset:SellAsset)
    {
       // console.log(calculatenetworth)
        return this.http.post(
            "https://localhost:44375/api/NetWorth/SellAssets",sellasset);
    }
}