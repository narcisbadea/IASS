import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { LoginService } from '../utils/login.service';
import { PermissionService } from '../utils/permission.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private permissionService: PermissionService,
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    let userRole = this.loginService.getUserRole();
    if (
      this.permissionService.checkPermission(
        userRole[userRole.length - 1],
        route.data['feature']
      )
    ) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
