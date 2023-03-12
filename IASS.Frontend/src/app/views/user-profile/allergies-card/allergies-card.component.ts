import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, Subject, switchMap, takeUntil } from 'rxjs';
import { AllergyForUserDto } from 'src/app/api/models';
import { AllergyService } from 'src/app/api/services';
import { AlertService } from 'src/app/core/alert/alert.service';
import { AllergiesModalComponent } from './allergies-modal/allergies-modal.component';

@Component({
  selector: 'app-allergies-card',
  templateUrl: './allergies-card.component.html',
})
export class AllergiesCardComponent implements OnInit, OnDestroy {
  @Input() profileId: string;

  loading: boolean = true;

  refreshData$: Subject<void> = new Subject<void>();
  destroy$: Subject<void> = new Subject<void>();

  userAllergies: AllergyForUserDto[];

  constructor(
    public modalService: NgbModal,
    private alertService:AlertService,
    private allergyService:AllergyService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.refreshData$
      .pipe(
        debounceTime(300),
        switchMap((_) =>
          this.allergyService.apiAllergyGet$Json({userId:this.profileId})
        ),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (result: AllergyForUserDto[]) => {
          this.userAllergies= result;
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
  }

  public allergyModal(allergy: AllergyForUserDto = null) {
    const modalRef = this.modalService.open(AllergiesModalComponent, {
      centered: true,
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    modalRef.componentInstance.allergy = allergy;
    modalRef.componentInstance.profileId = this.profileId;

    modalRef.result
      .then(() => {
        this.refreshData$.next();
      })
      .catch((error) => {
        this.alertService.error(error);
      });
  }
}
