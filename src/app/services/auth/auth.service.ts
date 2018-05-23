import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {IResponse, AuthResponseModel, AuthRequestModel} from "../../model";
import {map} from "rxjs/operators";
import {TokenService} from "../token/token.service";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private tokenService: TokenService) { }

  public signInUser(authRequest: AuthRequestModel): Observable<IResponse<AuthResponseModel>> {
    return this.http
      .post('api/auth/sign_in', authRequest)
      .pipe(
        map((response: IResponse<AuthResponseModel>) => {
          TokenService.setAuthToken(response.data.auth_token);
          this.tokenService.setUser();
          return response;
        })
      );
  }
}
