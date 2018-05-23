import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../model/products.model";
import {Observable} from "rxjs/index";
import {BasketService} from "../../services/basket/basket.service";

@Component({
  selector: 'ngwzp-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  public products$: Observable<ProductModel[]>;
  constructor(private basketService: BasketService) {
    this.products$ = this.basketService.basketItems$;
  }

  ngOnInit() {
  }

  public removeItem(index) {
    this.basketService.removeItemFromBasket(index);
  }

}
