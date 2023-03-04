import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginDto } from 'src/app/api/models';
import { AuthService, UserService } from 'src/app/api/services';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isLogin$: Observable<boolean> = this.isLoginSubject.asObservable();

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  public login(user: LoginDto): void {
    this.authService
      .authLoginPost$Json({ body: user })
      .subscribe(
        (res) => {
          this.setToken(res);
          this.isLoginSubject.next(true);
        },
        (error) => {
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

  getCurrentUserId(): Observable<string> {
    return this.userService.apiUserLoggedUseridGet$Json();
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
