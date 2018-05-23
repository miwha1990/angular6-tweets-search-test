import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs/index";
import {IResponse} from "../../model/response.model";
import {ProductModel} from "../../model/products.model";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<IResponse<ProductModel[]>> {
    return this.http.get<IResponse<ProductModel[]>>('/api/products');
  }
}
