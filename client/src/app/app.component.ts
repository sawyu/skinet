import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';
import { IPagination } from './shared/models/pagination';
import { IProduct } from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'client';
 // products: IProduct[];

 // constructor(private http: HttpClient){}
  constructor(private  basketService :BasketService, private accountService: AccountService){

  }
  ngOnInit(): void {
      this.loadBasket();
    }
    loadCurrentUser(){
      const token = localStorage.getItem('token');     
        this.accountService.loadCurrentUser(token).subscribe(()=>{
          console.log('loaded user');
        },error => {
          console.log(error);
        });
      
    }

    loadBasket(){
      const basketId = localStorage.getItem('basket_id');
      if(basketId){
        this.basketService.getBasket(basketId).subscribe(()=>{
          console.log('initialsed basket');
        },error=>{
          console.log(error);
        })
      }
    }
    /* this.http.get('https://localhost:5001/api/products?pageSize=50').subscribe
     ((response:IPagination)=>{
        this.products = response.data;
     },error=>{
       console.log(error);
     });*/
  
}
