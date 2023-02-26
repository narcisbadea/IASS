import { Subject, takeUntil } from 'rxjs';
import { AlertService } from './../alert/alert.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Alert } from './alert.config';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnDestroy {
  private untilDestroy$: Subject<void> = new Subject<void>();

  alerts: Alert[] = [];

  constructor(private service: AlertService) {}

  ngOnInit(): void {
    // this.service
    //   .getAlerts()
    //   .pipe(takeUntil(this.untilDestroy$))
    //   .subscribe((alert) => {
    //     if (alert) {
    //       this.alerts.push(alert);
    //     }
    //   });
  }

  close(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  ngOnDestroy(): void {
    this.untilDestroy$.next();
    this.untilDestroy$.complete();
  }
}
