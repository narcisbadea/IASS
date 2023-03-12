import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PatientProfileDto } from 'src/app/api/models';
import { UserService } from 'src/app/api/services';
import { AlertService } from 'src/app/core/alert/alert.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
})
export class PatientDetailComponent implements OnInit, OnDestroy {
  destroy$: Subject<void> = new Subject();
  profile: PatientProfileDto;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private alert: AlertService,
    private location: Location,
    private http: HttpClient,

  ) { }
  id: string;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    if (id) {
      this.getProfile(id);
    } else {
      this.goBack();
    }
  }

  getProfile(id: string) {
    this.userService
      .apiUserProfileGet$Json({ userId: id }).pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (profile: PatientProfileDto) => {
          this.profile = profile;
        },
        error: (_error) => {
          this.alert.error(`Failed to fetch profile for id ${id}`);
          this.goBack();
        },
      });
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
