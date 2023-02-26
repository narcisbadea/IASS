import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginDto } from 'src/app/api/models';
import { AuthService } from 'src/app/api/services';
// import { AlertService } from 'src/app/core/alert/alert.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isLogin$: Observable<boolean> = this.isLoginSubject.asObservable();

  constructor(
    private authService: AuthService,
    private router: Router,
    // private alertService: AlertService
  ) {}

  public login(user: LoginDto): void {
    console.log(user);

    this.authService
      .authLoginPost$Json({ body: user })
      .subscribe(
        (res) => {
          this.setToken(res);
          this.isLoginSubject.next(true);
        },
        (error) => {
          //this.alertService.error(error.error);
          this.isLoginSubject.next(false);
        }
      );
  }

  public logout(): void {
    localStorage.clear();
    this.isLoginSubject.next(false);
    this.router.navigateByUrl('/login');
  }

  public getToken(): string {
    return localStorage.getItem('token')!;
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  public getRememberMe(): boolean | null {
    var rememberMe = localStorage.getItem('rememberMe');

    if (rememberMe == 'true') {
      return true;
    } else if (rememberMe == 'false') {
      return false;
    } else {
      return null;
    }
  }

  private setRememberMe(value: boolean): void {
    localStorage.setItem('rememberMe', String(value));
  }

  public getUserRole(): string[] {
    var token = this.getToken();
    if (token != null) {
      var decodedToken = this.getDecodedAccessToken(token);
      var userRoles =
        decodedToken[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ];

      if (Array.isArray(userRoles)) {
        return userRoles;
      } else {
        return [userRoles];
      }
    }

    return [''];
  }

  public getCurrentUserId(): Observable<string> {
    return this.authService.authLoggedUsernameGet$Json();
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
