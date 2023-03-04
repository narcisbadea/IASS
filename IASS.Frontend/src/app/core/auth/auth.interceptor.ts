import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../utils/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  refreshTokenInProgress = false;

  tokenRefreshedSource = new Subject();
  tokenRefreshed$ = this.tokenRefreshedSource.asObservable();

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var obs = new Subject<HttpEvent<any>>();
    request = this.addAuthHeader(request);
    next.handle(request).subscribe(
      (evt) => {
        obs.next(evt);
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigateByUrl('/login');
          if (this.checkIfTokenExpired(error)) {
            this.onUnauthorized();
          }

          if (error.url.indexOf('auth') >= 0) {
            this.onUnauthorized();
            obs.error(error);
            return;
          }
        } else if (error.status == 403) {
          this.onForbidden();
          obs.error(error);
        } else {
          obs.error(error);
        }
      }
    );

    return obs.asObservable();
  }

  private checkIfTokenExpired(error: any): boolean {
    const errorMessage: string = error.headers.get('www-authenticate');

    return errorMessage.includes('The token expired');
  }

  private addAuthHeader(request: HttpRequest<any>) {
  
    const authHeader = this.loginService.getToken();
    if (authHeader && request.url.indexOf('Auth') < 0) {
      request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + authHeader,
        },
      });
    }
    return request;
  }

  private onUnauthorized() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  private onForbidden() {
    alert(
      "Please stop hacking your way into places where you shouldn't be ok? Thanks"
    );
    this.router.navigateByUrl('/profile');
  }
}
