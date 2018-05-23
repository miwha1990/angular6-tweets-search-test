import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpResponse} from '@angular/common/http';
import {HttpHandler} from '@angular/common/http/src/backend';
import {HttpEvent} from '@angular/common/http/src/response';
import {HttpRequest} from '@angular/common/http/src/request';

import {environment} from '../../environments/environment';

import {TJsonApiBody} from 'jsona/lib/JsonaTypes';
import Jsona from 'jsona/lib/Jsona';

import {Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class JsonApiInterceptor implements HttpInterceptor {
  private jsona: Jsona;
  constructor() {
    this.jsona = new Jsona();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        map((event: HttpEvent<any>) => {
          let newEvent;
          if (event instanceof HttpResponse) {
            if (event.body instanceof Blob) {
              newEvent = event.clone({
                body: event.body
              });
            } else {
              newEvent = event.clone({
                body: {
                  data: this.jsona.deserialize(event.body as TJsonApiBody),
                  meta: event.body.meta,
                }
              });
            }
            if (!environment.production) {
              console.log(newEvent.body);
            }
            return newEvent;
          }
        })
      );
  }
}
