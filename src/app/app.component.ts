import { Component } from '@angular/core';
import { TokenService } from "./services/token/token.service";

@Component({
  selector: 'ngwzp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private tokenService: TokenService) {
    this.tokenService.setUser();
  }
}
