import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MutualFundNAV } from "../models/mutualfundNAV";

@Injectable()
export class MutualFundNAVService {
    constructor(private http:HttpClient) 
    {
        

    }
    dailymfnavCheck(mutualfund:MutualFundNAV)
    {
        console.log(mutualfund)
        return this.http.get("http://localhost:55953/api/MutualFundNAV/"+mutualfund.mutualfundName);
    }
    
}