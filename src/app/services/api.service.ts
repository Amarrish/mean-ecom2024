import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL = "http://localhost:3000"
  constructor(private http:HttpClient) { }

  // get all product
  getallproductAPI = ()=>{
    return this.http.get(`${this.SERVER_URL}/products/all`)
  }

  // view product
  getviewproductAPI = (id:any)=>{
   return this.http.get(`${this.SERVER_URL}/product/view/${id}`)
  }

  // user register
  getuseregisterAPI =(user:any)=>{
    return this.http.post(`${this.SERVER_URL}/user/register`,user)
  }

  // user login 
  getuserloginAPI = (user:any) =>{
    return this.http.post(`${this.SERVER_URL}/user/login`,user)
  }
}
