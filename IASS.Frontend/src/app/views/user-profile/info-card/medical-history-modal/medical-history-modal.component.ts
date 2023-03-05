import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/api/services';
import { AlertService } from 'src/app/core/alert/alert.service';

@Component({
  selector: 'app-medical-history-modal',
  templateUrl: './medical-history-modal.component.html',
})
export class MedicalHistoryModalComponent implements OnInit, OnDestroy {
  @Input() transferedInfo;
  @Input() userId;

  isSubmitted: boolean = false;
  destroy$: Subject<void> = new Subject<void>();
  loading: boolean = false;
  loadingDelete: boolean = false;

  public briefInfoFormGroup = this.fb.group({
    info: [null as string, Validators.required],
  });

  constructor(
    private activeModal: NgbActiveModal,
    private userService: UserService,
    private fb: FormBuilder,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initData() {
    if (!!this.transferedInfo) {
      this.briefInfoFormGroup = this.fb.group({
        info: [this.transferedInfo],
      });
    }
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  submit() {
    this.isSubmitted = true;
    this.loading = true;
    if (this.briefInfoFormGroup.valid) {

    } else {
      this.loading = false;
    }
  }

  delete() {
    this.loadingDelete = true;
  }
}
