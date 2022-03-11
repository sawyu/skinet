import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-propduct-details',
  templateUrl: './propduct-details.component.html',
  styleUrls: ['./propduct-details.component.scss']
})
export class PropductDetailsComponent implements OnInit {
  product: IProduct;
  constructor(private shopService: ShopService,private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct(){
    this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(product=>
    {  this.product = product;
    },error =>{
      console.log(error);
    });
  }

}
