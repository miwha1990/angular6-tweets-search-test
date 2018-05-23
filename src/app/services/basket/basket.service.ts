import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/index";
import {ProductModel} from "../../model/products.model";

@Injectable()
export class BasketService {

  public basketItems$: BehaviorSubject<ProductModel[]>;
  constructor() {
    this.basketItems$ = new BehaviorSubject<ProductModel[]>([]);
  }

  addItemToBasket(product: ProductModel) {
    const currentValue = this.basketItems$.getValue();
    this.basketItems$.next([...currentValue, product]);
  }

  removeItemFromBasket(index: number) {
    const currentValue = this.basketItems$.getValue();
    this.basketItems$.next([
      ...currentValue.filter((item, _index) => _index !== index)
    ]);
  }
}
