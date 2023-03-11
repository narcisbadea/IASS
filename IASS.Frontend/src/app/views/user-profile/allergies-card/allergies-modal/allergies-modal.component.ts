import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-allergies-modal',
  templateUrl: './allergies-modal.component.html',
})
export class AllergiesModalComponent implements OnInit {
  MultiValues = ['Allergic Rhinitis', 'Food Allergies', 'Anaphylaxis', 'Allergic Conjunctivitis', 'Atopic Dermatitis (Eczema)', 'Asthma', 'Drug Allergies', 'Insect Sting Allergies', 'Contact Dermatitis', 'Hay Fever']
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
