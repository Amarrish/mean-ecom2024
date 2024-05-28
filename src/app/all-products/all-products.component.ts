import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  
  allproducts:any = []
  loggeduser:string = ''
  constructor(private api:ApiService, private router:Router){}

  ngOnInit():void{
    this.getallproduct()
  }

  getallproduct =  ()=>{
     this.api.getallproductAPI().subscribe({
      next:(res:any)=>{
        this.allproducts = res
        // console.log(this.allproducts);
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  cartloggedin = (product:any)=>{
    if(sessionStorage.getItem('token')){
      this.router.navigateByUrl('/cart')
    }
    else{
      alert('Please login for add item into cart')
    }
  }

  whishlistloggedin = (product:any)=>{
    if(sessionStorage.getItem('token')){
      this.router.navigateByUrl('/whishlist')
    }
    else{
      alert('Please login for add item into whishlist')
    }
  }
}
