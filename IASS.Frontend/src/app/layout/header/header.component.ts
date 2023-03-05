import { Features } from './../../core/utils/models';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/utils/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  feature: typeof Features = Features;

  constructor(public router: Router, private loginService: LoginService) {}

  logout() {
    this.loginService.logout();
  }
}
