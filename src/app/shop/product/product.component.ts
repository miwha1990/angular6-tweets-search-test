import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

import {ProductModel} from "../../model/products.model";
import {BasketService} from "../../services/basket/basket.service";

@Component({
  selector: 'ngwzp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()
  public product: ProductModel;
  constructor(private basketService: BasketService,
              public snackBar: MatSnackBar) { }
  ngOnInit() {}

  public addToBasket() {
    this.basketService.addItemToBasket(this.product);
    this.snackBar.open('Product was added to the Cart', '', {
      duration: 1000,
    });
  }
}
