import { Component, Input, OnInit } from '@angular/core';
import { debounceTime, Subject, switchMap, takeUntil } from 'rxjs';
import { AlertService } from 'src/app/core/alert/alert.service';
import { DownloadService } from 'src/app/core/services/download.service';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
})
export class DownloadButtonComponent implements OnInit {
  @Input() userId: string;

  downloadProfileAsPdf$: Subject<string> = new Subject<string>();
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private alertService: AlertService,
    private downloadService: DownloadService
  ) {

  }

  ngOnInit(): void {}

  downloadPdf(id: string): void {
    this.downloadProfileAsPdf$.next(id);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
