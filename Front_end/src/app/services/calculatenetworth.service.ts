import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Calculatenetworth } from "../models/calculatenetworth";

@Injectable()
export class CalculatenetworthService 
{
    constructor(private http:HttpClient) 
    {
        
    }
    networthCheck(calculatenetworth:Calculatenetworth)
    {
       // console.log(calculatenetworth)
        return this.http.post(
            "https://localhost:44375/api/NetWorth/GetNetWorth",calculatenetworth);
    }
}