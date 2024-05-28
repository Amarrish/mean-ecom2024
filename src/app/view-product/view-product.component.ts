import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{

  products:any={}
  constructor(private activateRouteInstance:ActivatedRoute, private api:ApiService, private router:Router){}

  ngOnInit(): void {
      this.activateRouteInstance.params.subscribe((data)=>{
        const {id} = data
        // console.log(id);
        // api call to get a particular product details
        this.viewproduct(id)
      })
  }

  viewproduct =(id:any)=>{
   this.api.getviewproductAPI(id).subscribe({
    next:(res:any)=>{
      this.products = res
      // console.log(this.products);
    },
    error:(err:any)=>{
      console.log(err.message);
      
    }
   })
  }

  loggedcart =()=>{
    if(sessionStorage.getItem('token')){
      this.router.navigateByUrl('/cart')
    }
    else{
      alert('Please login for add cart item')
    }
  }

  loggedwhishlist =()=>{
    if(sessionStorage.getItem('token')){
      this.router.navigateByUrl('/whishlist')
    }
    else{
      alert('Please login for add cart item')
    }
  }
}
