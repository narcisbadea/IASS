import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { debounceTime, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { Features } from '../../core/utils/models';
import { AuthService, UserService } from '../../api/services';
import { LoginService } from '../../core/utils/login.service';
import { AlertService } from 'src/app/core/alert/alert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  features = Features;
  userName = '';

  refreshData$: Subject<void> = new Subject<void>();
  destroy$: Subject<void> = new Subject<void>();

  imageURL: SafeUrl;
  URL = `https://localhost:7044/api/User/profile-photo`;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private userService: UserService,
    private alertService: AlertService,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.refreshData$
      .pipe(
        debounceTime(300),
        switchMap(() => this.userService.apiUserLoggedUserNameGet$Json()),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (result: string) => {
          this.userName = result;
        },
        error: (error) => {
          this.alertService.error(error);
        }
      });

    this.loadImage().subscribe(i => {
      this.imageURL = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(i)
      );
    });

    this.refreshData$.next();
  }

  loadImage(): Observable<Blob> {
    return this.http.get(this.URL, { responseType: 'blob' });
  }

  logout(): void {
    this.loginService.logout();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
