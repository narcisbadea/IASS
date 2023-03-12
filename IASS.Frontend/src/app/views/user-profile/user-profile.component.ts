import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { PatientProfileDto } from 'src/app/api/models';
import { UserService } from 'src/app/api/services';
import { LoginService } from 'src/app/core/utils/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  @Input() userId: string = '';
  @Input() profile: PatientProfileDto;

  imageURL: SafeUrl;
  URL = `https://localhost:7044/api/User/profile-photo/`;


  isOwnProfile: boolean = false;
  userId$: Observable<string>;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {
    const routeId = this.route.snapshot.paramMap.get('id');
    this.userId$ = this.userService.apiUserLoggedUseridGet$Json().pipe(
      tap(
        (userId: string) =>
          (this.isOwnProfile = !routeId || routeId === userId)
      ),
      map((userId: string) => (routeId ? routeId : userId))
    );
  }

  ngOnInit(): void {
    this.loginService.getCurrentUserId().subscribe((userIdV: string) => {
      if (this.router.url === '/profile') {
        this.isOwnProfile = true;
        this.userId = userIdV;
      } else {
        this.isOwnProfile = false;
        this.userId = this.route.snapshot.paramMap.get('id')!;
        this.URL += this.userId;
        this.loadImage().subscribe(i => {
          this.imageURL = this.sanitizer.bypassSecurityTrustUrl(
            URL.createObjectURL(i)
          );
        });
      }
    });
  }

  loadImage(): Observable<Blob> {
    return this.http.get(this.URL, { responseType: 'blob' });
  }
}

