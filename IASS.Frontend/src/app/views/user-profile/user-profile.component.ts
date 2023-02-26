import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/core/utils/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
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
    this.loginService.getCurrentUserId().subscribe((userId) => {
      if (this.router.url === '/profile') {
        this.isOwnProfile = true;
        this.userId = userId;
      } else {
        this.isOwnProfile = false;
        this.userId = this.route.snapshot.paramMap.get('id')!;
      }
      console.log(this.userId);
    });
  }
}

