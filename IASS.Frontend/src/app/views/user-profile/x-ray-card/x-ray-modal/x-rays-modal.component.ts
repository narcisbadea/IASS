import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, Subject, Subscription, switchMap, takeUntil } from 'rxjs';
import { XRayType } from 'src/app/api/models';
import { XRayService, XRayTypeService } from 'src/app/api/services';
import { AlertService } from 'src/app/core/alert/alert.service';

@Component({
  selector: 'app-x-ray-modal',
  templateUrl: './x-rays-modal.component.html'
})
export class XRayModalComponent implements OnInit, OnDestroy {
  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private xrayTypeService: XRayTypeService,
    private alertService: AlertService,
    private xrayService: XRayService
  ) { }

  public photoFile: File | null = null;

  xRayTypes: XRayType[];
  submitted = false;

  editable: boolean = false;
  loading: boolean = false;

  operationSubscription: Subscription;
  instanceDataSubscription: Subscription;

  refreshData$: Subject<void> = new Subject<void>();
  postData$: Subject<void> = new Subject<void>();
  destroy$: Subject<void> = new Subject<void>();

  @Input() xRayId;
  @Input() userId;

  xRayForm = this.fb.group({
    Photo: [null],
    TypeId: [null as string, Validators.required],
    Description: [null],
  });


  onPhotoChange(event: any) {
    const file = event.target.files[0];
    this.photoFile = file;
    const reader = new FileReader();
    reader.readAsArrayBuffer(this.photoFile);
    reader.onload = () => {
      this.xRayForm.patchValue({ Photo: new Blob([reader.result], { type: this.photoFile.type }) as Blob });
    };
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  onSubmit() {
    this.postData$
      .pipe(
        debounceTime(300),
        switchMap((_) =>
          this.xrayService.apiXRayPost$Json({body: this.xRayForm.value, userId:this.userId})
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
  }

  ngOnInit(): void {
    this.initData();
  }

  initData(){
    this.loading = true;
    this.refreshData$
      .pipe(
        debounceTime(300),
        switchMap((_) =>
          this.xrayTypeService.apiXRayTypeAllGet$Json()
        ),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (result: XRayType[]) => {
          this.xRayTypes = result;
        },
        error: (error) => {
          this.alertService.error(error);
        },
      });

    this.loading = false;
    this.refreshData$.next();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.operationSubscription != null) this.operationSubscription.unsubscribe();
    if (this.instanceDataSubscription != null) this.instanceDataSubscription.unsubscribe();
  }
}
