import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, Subject, switchMap, takeUntil } from 'rxjs';
import { UserService } from 'src/app/api/services';
import { AlertService } from 'src/app/core/alert/alert.service';
import { MedicalHistoryModalComponent } from './medical-history-modal/medical-history-modal.component';
@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html'
})
export class InfoCardComponent implements OnInit, OnDestroy {
  @Input() profileId: string;

  medicalHistory: string = null;
  loading: boolean = true;

  refreshData$: Subject<void> = new Subject<void>();
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    public modalService: NgbModal,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.refreshData$
      .pipe(
        debounceTime(300),
        switchMap((_) =>
          this.userService.apiUserMedicalHistoryGet$Json({userId:this.profileId})
        ),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (result: string) => {
          this.medicalHistory = result;
          this.loading = false;
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

  public medicalHistoryModal(userId: string = this.profileId) {
    const modalRef = this.modalService.open(MedicalHistoryModalComponent, {
      centered: true,
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    modalRef.componentInstance.transferedInfo = this.medicalHistory;
    modalRef.componentInstance.userId = userId;

    modalRef.result
      .then(() => {
        this.refreshData$.next();
      })
      .catch((error) => {
        this.alertService.error(error);
      });
  }
}
