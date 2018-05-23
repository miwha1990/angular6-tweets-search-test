import { Component, OnInit } from '@angular/core';

import { TokenService } from "../../services/token/token.service";
import { UserModel } from "../../model/user.model";

@Component({
  selector: 'ngwzp-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile: UserModel;

  constructor(private tokenService: TokenService) {
    this.profile = tokenService.userData;
  }

  ngOnInit() {
  }

}
