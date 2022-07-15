import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/user";

@Injectable()
export class UserService {
    constructor(private http:HttpClient) 
    {

    }
    userLoginCheck(user:User)
    {
        /*var httpOptions = {
            headers: new HttpHeaders({'Content-Type':'appilication/json',
        'Authorization':'Bearer '+localStorage.getIte("token")?.toString()})
        };
        console.log(httpOptions);*/
        return this.http.post("http://localhost:52898/api/User/Login", user);
    }
}