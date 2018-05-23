import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopModule} from "./shop.module";
import {ShopWindowComponent} from "./shop-window/shop-window.component";
import {BasketComponent} from "./basket/basket.component";

const routes: Routes = [
  {
    path: '',
    component: ShopWindowComponent
  },
  {
    path: 'basket',
    component: BasketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
