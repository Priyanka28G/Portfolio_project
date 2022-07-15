import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class WelcomeService {
    constructor(private http:HttpClient) 
    {
        

    }
}