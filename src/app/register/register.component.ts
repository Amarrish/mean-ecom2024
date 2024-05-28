import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  
  registerform = this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor (private fb:FormBuilder, private api:ApiService, private router:Router){}


  getuseregister =()=> {
    if(this.registerform.valid){
      const username = this.registerform.value.username
      const email = this.registerform.value.email
      const password = this.registerform.value.password
      console.log(`useraname ${username} , email: ${email}, password: ${password}`);

      const reqbody = { username, email, password }

      this.api.getuseregisterAPI(reqbody).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.router.navigateByUrl('user/login')
        },
        error:(err:any)=>{
          console.log(err);
          alert(err.error)
          
        }
      })
    }else{
      alert('Invalid form')
    }
  }
}
