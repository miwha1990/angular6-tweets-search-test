import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopWindowComponent } from './shop-window/shop-window.component';
import { ProductComponent } from './product/product.component';
import {MaterialModule} from "../material/material.module";
import {ProductService} from "../services/product/product.service";
import { BasketComponent } from './basket/basket.component';
import {DomChangeDirective} from "../directives/ng-html-change.directive";

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    MaterialModule
  ],
  declarations: [ShopWindowComponent, ProductComponent, BasketComponent, DomChangeDirective],
  providers: [ProductService]
})
export class ShopModule { }
