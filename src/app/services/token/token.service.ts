import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/index';

import {IResponse, UserModel} from '../../model';
import {environment} from '../../../environments/environment';

@Injectable()
export class TokenService {

  public userData: UserModel;
  constructor(private http: HttpClient) { }

  public static getAuthToken(): string {
    return localStorage.getItem(environment.TOKEN);
  }

  public static setAuthToken(token: string): void {
    localStorage.setItem(environment.TOKEN, token);
  }

  public static getAuthHeader() {
    return {
      'Authorization': `Bearer ${TokenService.getAuthToken()}`
    };
  }

  public setUser(): void {
    if (TokenService.getAuthToken()) {
      this.loadUser()
        .subscribe(user => this.userData = user.data);
    }
  }

  public signOut(): void {
    localStorage.removeItem(environment.TOKEN);
    this.userData = undefined;
  }

  private loadUser(): Observable<IResponse<UserModel>> {
    return this.http.get<IResponse<UserModel>>('/api/auth/load_user');
  }
}
