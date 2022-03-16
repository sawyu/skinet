import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-propduct-details',
  templateUrl: './propduct-details.component.html',
  styleUrls: ['./propduct-details.component.scss']
})
export class PropductDetailsComponent implements OnInit {
  product: IProduct;
  constructor(private shopService: ShopService,private activateRoute: ActivatedRoute,
     private bcService: BreadcrumbService) { 
       this.bcService.set('@productDetails','');
     }

  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct(){
    this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(product=>
    { 
      this.product = product;
      this.bcService.set('@productDetails',product.name)
    },error =>{
      console.log(error);
    });
  }

}
