import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, Subject, Subscription, switchMap, takeUntil } from 'rxjs';
import { AllergyCategory, AllergyForUserDto, AllergyToPostDto } from 'src/app/api/models';
import { AllergyCategoryService, AllergyService } from 'src/app/api/services';
import { AlertService } from 'src/app/core/alert/alert.service';

@Component({
  selector: 'app-allergies-modal',
  templateUrl: './allergies-modal.component.html',
})
export class AllergiesModalComponent implements OnInit, OnDestroy {
  categories: AllergyCategory[];
  severities: string[] = ['Mild', 'Moderate', 'Severe', 'Chronic'];

  submitted = false;

  editable: boolean = false;
  loading: boolean = false;
  loadingDelete: boolean = false;

  operation: Subscription;
  instanceData: Subscription;

  @Input() allergy: AllergyForUserDto;
  @Input() profileId: string;

  refreshData$: Subject<void> = new Subject<void>();
  deleteAllergy$: Subject<void> = new Subject<void>();
  postAllergy$: Subject<void> = new Subject<void>();
  putAllergy$: Subject<void> = new Subject<void>();

  destroy$: Subject<void> = new Subject<void>();

  allergyForm = this.fb.group({
    severity: [null as string, Validators.required],
    categoryId: [null as AllergyCategory, Validators.required],
    description: [null],
  });

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private categoryService: AllergyCategoryService,
    private allergyService: AllergyService,
    private alertService: AlertService
  ) { }

  compareFn(category1: AllergyCategory, category2: AllergyCategory) {
    return category1 && category2 ? category1.id === category2.id : category1 === category2;
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  deleteAllergy(allergyId: string = this.allergy.id) {
    this.loadingDelete = true;
    this.deleteAllergy$
      .pipe(
        debounceTime(300),
        switchMap((_) =>
          this.allergyService.apiAllergyDelete$Json({ allergyId: allergyId })
        ),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (res: string) => {
          this.alertService.success(res);
          this.closeModal();
        },
        error: (error) => {
          this.alertService.error(error);
          this.closeModal();
        },
      });
    this.loadingDelete = false;
    this.deleteAllergy$.next();

  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    if (!this.allergy) {
      this.postAllergy$
        .pipe(
          debounceTime(300),
          switchMap((_) =>
            this.allergyService.apiAllergyPost$Json({ body: this.allergyForm.value as AllergyToPostDto, userId: this.profileId })
          ),
          takeUntil(this.destroy$)
        )
        .subscribe({
          next: (res: string) => {
            this.alertService.success(res);
            this.closeModal();
          },
          error: (error) => {
            this.alertService.error(error);
            this.closeModal();
          },
        });
      this.loading = false;
      this.postAllergy$.next();
    } else {
      console.log("update");

      this.putAllergy$
        .pipe(
          debounceTime(300),
          switchMap((_) =>
            this.allergyService.apiAllergyPut$Json({ body: this.allergyForm.value as AllergyToPostDto, userId: this.profileId, allergyId: this.allergy.id })
          ),
          takeUntil(this.destroy$)
        )
        .subscribe({
          next: (res: string) => {
            this.alertService.success(res);
            this.closeModal();
          },
          error: (error) => {
            this.alertService.error(error);
            this.closeModal();
          },
        });
        this.loading = false;
        this.putAllergy$.next();
    }
  }

  initData() {
    if (!!this.allergy) {
      this.allergyForm.controls['severity'].setValue(this.allergy.severity);
      this.allergyForm.controls['categoryId'].setValue(this.allergy.category);
      this.allergyForm.controls['description'].setValue(this.allergy.description);
    }
    this.loading = true;
    this.refreshData$
      .pipe(
        debounceTime(300),
        switchMap((_) =>
          this.categoryService.apiAllergyCategoryAllGet$Json()
        ),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (result: AllergyCategory[]) => {
          this.categories = result;
        },
        error: (error) => {
          this.alertService.error(error);
        },
      });

    this.loading = false;
    this.refreshData$.next();
  }

  ngOnInit(): void {
    this.initData();
  }

  ngOnDestroy(): void {
    if (this.operation != null) this.operation.unsubscribe();
    if (this.instanceData != null) this.instanceData.unsubscribe();
  }
}
