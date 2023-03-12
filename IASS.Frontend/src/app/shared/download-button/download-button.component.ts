import { Component, Input, OnInit } from '@angular/core';
import { debounceTime, Subject, switchMap, takeUntil } from 'rxjs';
import { PdfExporterService } from 'src/app/api/services';
import { AlertService } from 'src/app/core/alert/alert.service';
import { DownloadService } from 'src/app/core/services/download.service';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
})
export class DownloadButtonComponent implements OnInit {
  @Input() userId: string;

  downloadProfileAsPdf$: Subject<string> = new Subject<string>();
  downloadProfileAsXML$: Subject<string> = new Subject<string>();
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private alertService: AlertService,
    private downloadService: DownloadService,
    private pdfService: PdfExporterService
  ) {
    this.downloadProfileAsPdf$
      .pipe(
        debounceTime(300),
        switchMap((id: string) =>
          this.pdfService.apiPdfExporterGeneratePdfGet$Json$Response(
            { userId: id }
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (response) => {
          this.downloadService.saveFile(response);
        },
        error: (error) => {
          this.alertService.error(error);
        },
      });
      this.downloadProfileAsXML$
      .pipe(
        debounceTime(300),
        switchMap((id: string) =>
          this.pdfService.apiPdfExporterGeneratePdfGet$Json$Response(
            { userId: id }
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (response) => {
          this.downloadService.saveFile(response);
        },
        error: (error) => {
          this.alertService.error(error);
        },
      });
  }

  ngOnInit(): void {}

  downloadPdf(id: string): void {
    this.downloadProfileAsPdf$.next(id);
  }

  downloadXML(id: string):void{
    this.downloadProfileAsXML$.next(id);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
