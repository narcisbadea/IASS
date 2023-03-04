import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-surgery-modal',
  templateUrl: './surgery-modal.component.html'
})
export class SurgeryModalComponent implements OnInit, OnDestroy {
  MultiValues = ['Appendectomy', 'General Surgery', 'Coronary Artery Bypass Grafting', 'Cardiac Surgery', 'Rhinoplasty', 'Plastic Surgery', 'Colectomy', 'General Surgery', 'Mastectomy', 'Oncology', 'Nephrectomy', 'Urology', 'Herniorrhaphy', 'General Surgery', 'Prostatectomy', 'Urology']
  submitted = false;

  editable: boolean = false;
  loading: boolean = false;
  loadingDelete: boolean = false;

  operation: Subscription;
  instanceData: Subscription;

  @Input() surgeryId;
  @Input() userId;

  languageForm = this.fb.group({
    name: [null as string, Validators.required],
    level: [null as string, Validators.required],
    description: [null],
  });

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {}

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  deleteSurgery() {

  }

  onSubmit() {
    this.submitted = true;
  }

  initData() {

  }

  ngOnInit(): void {
    this.initData();
  }

  ngOnDestroy(): void {
    if (this.operation != null) this.operation.unsubscribe();
    if (this.instanceData != null) this.instanceData.unsubscribe();
  }
}
