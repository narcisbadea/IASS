import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/core/utils/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  @Input() userId: string = '';

  isOwnProfile: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginService.getCurrentUserId().subscribe(( userIdV: string) => {
      if (this.router.url === '/profile') {
        this.isOwnProfile = true;
        this.userId = userIdV;
      } else {
        this.isOwnProfile = false;
        this.userId = this.route.snapshot.paramMap.get('id')!;
      }
    });
  }
}

