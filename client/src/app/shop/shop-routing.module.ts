import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { PropductDetailsComponent } from './propduct-details/propduct-details.component';

const routes: Routes=[
  {path: '', component:ShopComponent},
  {path: 'shop/:id', component:PropductDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
