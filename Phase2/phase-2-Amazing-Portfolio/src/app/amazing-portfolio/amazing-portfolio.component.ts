import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { contact } from '../port';

@Component({
  selector: '  app-amazing-portfolio  ',
  templateUrl: './amazing-portfolio.component.html',
  styleUrls: ['./amazing-portfolio.component.css']
})
export class AmazingPortfolioComponent implements OnInit {
  name:string="";
  userName:string="";
  Password:string="";
 sup:string="Sign Up Page";
 ///////////////////////
  flagL:boolean = true;
  flagS:boolean = false;
  flagC:boolean =false;

  //////////////////////
  isTableVisible: boolean = false;
  notVisibil:string="Show Contacts";
  
  //////////////
  contacts:Array<contact>=new Array();

  /////////
  //for MDF Model
loginRef= new FormGroup({
user:new FormControl("",[Validators.required]),
pass: new FormControl("",[Validators.required])
})

RegisterRef = new FormGroup({
  //Make all forms required
  Fullname:new FormControl("",[Validators.required]),

  username:new FormControl("",[Validators.required]),

  password:new FormControl("",[Validators.required])
})
constructor() { }

  ngOnInit(): void {
  }


LPage(){
  this.flagL=false;
  this.flagS=true
}

SPage(){
this.flagL=true;
this.flagS=false;
}


Ppage(){
this.flagL=false;
this.flagS=false;
this.flagC=true;
}


logOut(){
this.flagL=true;
this.flagS=false;
this.flagC=false;

}

////using MDF model
checkUser() {
  let login = this.loginRef.value
  if(login.user==this.userName && login.pass==this.Password){
      this.Ppage()
  }else {
    alert("Incorrect UserName or Password  ")
  }
  this.loginRef.reset();
}

showTable() {
  if(this.isTableVisible == false){
  this.isTableVisible=true
  this.notVisibil="Hide Contatcs"
  }else{
    this.isTableVisible=false
    this.notVisibil="Show Contacts"

  }
}

AddNewUser(){
  let Register = this.RegisterRef.value

this.name= Register.userName;
this.userName=Register.username;
this.Password=Register.password; 
this.RegisterRef.reset();
this.LPage(); 
alert("You are now registerd!!!")

}

  addContact(empName:any,empContact:any){
    let name =empName.value;
    let Pnumber =empContact.value;
    let x = new contact(name,Pnumber)
    this.contacts.push(x)
    alert("new Contact added")

  }

    }