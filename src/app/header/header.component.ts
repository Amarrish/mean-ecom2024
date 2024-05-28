import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  username:string=''

  constructor(){}

  ngOnInit(): void {
    this.loginusername() 
  }

  loginusername =()=>{
   if(sessionStorage.getItem("existinguser")){
    this.username = JSON.parse(sessionStorage.getItem('existinguser') || '').username
   }
   else{
    this.username = ""
   }
  }

}
