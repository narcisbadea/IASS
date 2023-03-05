import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { UserService } from 'src/app/api/services';
import { LoginService } from 'src/app/core/utils/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  @Input() userId: string = '';

  isOwnProfile: boolean = false;
  userId$: Observable<string>;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
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
    // this.loginService.getCurrentUserId().subscribe(( userIdV: string) => {
    //   if (this.router.url === '/profile') {
    //     this.isOwnProfile = true;
    //     this.userId = userIdV;
    //   } else {
    //     this.isOwnProfile = false;
    //     this.userId = this.route.snapshot.paramMap.get('id')!;
    //   }
    // });
  }
}

