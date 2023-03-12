import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, Observable, Subject, Subscription, switchMap, takeUntil } from 'rxjs';
import { XRayType } from 'src/app/api/models';
import { XRayService } from 'src/app/api/services';
import { AlertService } from 'src/app/core/alert/alert.service';

@Component({
  selector: 'app-x-ray-view-modal',
  templateUrl: './x-ray-view-modal.component.html'
})
export class XRayViewModalComponent implements OnInit {
  constructor(
    private activeModal: NgbActiveModal,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private xrayService:XRayService,
    private alertService:AlertService
  ) { }

  public photoFile: File | null = null;

  xRayTypes: XRayType[];
  submitted = false;

  operationSubscription: Subscription;
  instanceDataSubscription: Subscription;

  refreshData$: Subject<void> = new Subject<void>();
  postData$: Subject<void> = new Subject<void>();
  deleteData$: Subject<void> = new Subject<void>();
  destroy$: Subject<void> = new Subject<void>();

  imageURL: SafeUrl;
  URL = `https://localhost:7044/api/XRay/photo?xRayId=`;

  @Input() xRayId;
  @Input() description = "";

  loadingDelete: Boolean = false;

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  ngOnInit(): void {
    this.URL += this.xRayId;
    console.log(this.URL);

    this.loadImage().subscribe(i => {
      this.imageURL = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(i)
      );
    });
  }

  loadImage(): Observable<Blob> {
    return this.http.get(this.URL, { responseType: 'blob' });
  }

  delete(){
    this.loadingDelete = true;
    this.postData$
      .pipe(
        debounceTime(300),
        switchMap((_) =>
          this.xrayService.apiXRayDelete$Json({xrayId: this.xRayId})
        ),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: () => {
          this.alertService.success("Success!");
          this.closeModal();
        },
        error: (error) => {
          this.alertService.error(error.error);
        },
      });
    this.postData$.next();
    this.loadingDelete = false;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.operationSubscription != null) this.operationSubscription.unsubscribe();
    if (this.instanceDataSubscription != null) this.instanceDataSubscription.unsubscribe();
  }
}
