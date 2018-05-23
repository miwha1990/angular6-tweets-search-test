import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import {ProductService} from "../../services/product/product.service";
import {ProductModel, IResponse} from "../../model";

@Component({
  selector: 'ngwzp-shop-window',
  templateUrl: './shop-window.component.html',
  styleUrls: ['./shop-window.component.scss'],
  animations: [
    trigger('listAnimation', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
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
