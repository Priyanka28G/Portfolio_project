import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import {Input, Output, EventEmitter } from '@angular/core'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  //@Output() msgToSibling = new EventEmitter<any>();
  //currentMsgToSibling='';
  user:User;
  loginInfo: any;
  outputMessage: any;
  //public PortfolioID: string="";
  //public Password: string="";
  //public jwtToken:any;

  constructor(private userService:UserService, private router:Router) 
  {
    this.user = new User();
  }

  ngOnInit(): void 
  {
    
  }
  userLogin()
  {
    this.userService.userLoginCheck(this.user).subscribe((data)=>{
    console.log(data);
    this.loginInfo=data;
    this.router.navigate(["mainpage"])
    /*if(data.jwtToken)
    {
      localStorage.setItem("token",data.jwtToken);
      this.router.navigate(["mainpage"])
    }*/
    });
  }
  message(){
    if(this.loginInfo.portfolioID.length<6 || this.loginInfo.password.length<=0)
    {
      this.outputMessage="Wrong Credentials";
    }
  }
    // msgToSib() 
    // { 
    //   this.msgToSibling.emit(this.currentMsgToSibling);
    // }
} 