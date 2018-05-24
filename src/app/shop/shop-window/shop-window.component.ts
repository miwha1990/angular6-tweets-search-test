import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  query,
  transition, stagger, animateChild
} from '@angular/animations';

import {ProductService} from "../../services/product/product.service";
import {ProductModel, IResponse} from "../../model";

@Component({
  selector: 'ngwzp-shop-window',
  templateUrl: './shop-window.component.html',
  styleUrls: ['./shop-window.component.scss'],
  animations: [
    trigger('list', [
      transition(':enter', [
        query('@items', stagger(300, animateChild()))
      ]),
    ]),
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ])
    ])
  ]
})
export class ShopWindowComponent implements  OnInit, AfterViewInit, OnDestroy {
  public products: ProductModel[];
  public productsLength = 0;
  animationState = 'inactive';
  static hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
  constructor(private productService: ProductService,
              private elementRef: ElementRef) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe((products: IResponse<ProductModel[]>) => {
        this.productsLength = products.data.length;
        this.products = products.data; });
    window.addEventListener('resize', () => this.resizeAllGridItems());
  }

  ngAfterViewInit() {
    // run animation by changing the state
    this.animationState = this.animationState === 'inactive ' ? 'active' : 'inactive ';
  }

  ngOnDestroy() {
    window.removeEventListener('resize', () => {});
  }

  onDomChange(event) {
    this.resizeGridItem(event.target);
  }

  resizeGridItem(item) {
    if (ShopWindowComponent.hasClass(item, 'product-item')) {
      const grid = this
          .elementRef
          .nativeElement
          .querySelector('.product-container'),
        rowHeight = parseInt(
          window
            .getComputedStyle(grid)
            .getPropertyValue('grid-auto-rows'),
          10),
        rowGap = parseInt(
          window
            .getComputedStyle(grid)
            .getPropertyValue('grid-row-gap'),
          10),
        rowSpan = Math.ceil(
          (item.querySelector('.card').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)
        );
      item.style.gridRowEnd = 'span ' + rowSpan;
    }
  }
  resizeAllGridItems() {
    const allItems = this
      .elementRef
      .nativeElement
      .querySelectorAll('.product-item');
    for (let i = 0; i < allItems.length; i++) {
      this.resizeGridItem(allItems[i]);
    }
  }
}
