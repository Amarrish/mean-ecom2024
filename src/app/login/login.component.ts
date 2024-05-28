import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-g]*')]]
  })

  constructor(private fb:FormBuilder, private api:ApiService, private router:Router){}
  
  getuserlogin =()=>{
    if(this.loginform.valid){
      const email = this.loginform.value.email
      const password = this.loginform.value.password
  
      const reqbody = {email,password}
      this.api.getuserloginAPI(reqbody).subscribe({
        next:(res:any)=>{
          console.log(res);
          sessionStorage.setItem("existinguser", JSON.stringify(res.existinguser))
          sessionStorage.setItem("token", JSON.stringify(res.token))
          alert('login successfull')
        this.router.navigateByUrl('')
        }
      })
    }
    else{
      alert('Invalid form')
    }
  }
}
