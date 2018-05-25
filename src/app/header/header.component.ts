import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {TokenService} from "../services/token/token.service";
import {BasketService} from "../services/basket/basket.service";

@Component({
  selector: 'ngwzp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public productsCount: number;
  public obs: any;
  constructor(public tokenService: TokenService,
              private router: Router,
              private basketService: BasketService) {
    this.productsCount = this.basketService.basketItems$.getValue().length;
    this.basketService.basketItems$.subscribe((value) => {
      this.productsCount = value.length;
    });
  }

  ngOnInit() {
  }

  public goToProfile() {
    if (this.tokenService.userData) {
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['auth/sign-in']);
    }
  }

  public signOut() {
    this.tokenService.signOut();
  }
}
