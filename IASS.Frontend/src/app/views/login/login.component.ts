import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LoginDto } from 'src/app/api/models';
import { LoginService } from 'src/app/core/utils/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  untilDestroy$: Subject<void> = new Subject();
  public isLoading: string = '';

  public loginUser:LoginDto = {};

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.isLogin$
      .pipe(takeUntil(this.untilDestroy$))
      .subscribe((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          this.router.navigateByUrl('/profile');
        }
        this.isLoading = '';
      });
  }



  onSubmit() {

    this.isLoading = 'login';
    this.loginService.login(this.loginUser);
  }

  onRegister(){

  }
}
