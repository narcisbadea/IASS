import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, Subject, switchMap, takeUntil } from 'rxjs';
import { SurgeryModalComponent } from './surgery-modal/surgery-modal.component';

@Component({
  selector: 'app-surgery-card',
  templateUrl: './surgery-card.component.html'
})
export class SurgeryCardComponent implements OnInit {
  @Input() profileId: string;

  constructor(
    public modalService: NgbModal
      ) {}

  refreshData$: Subject<void> = new Subject<void>();
  destroy$: Subject<void> = new Subject<void>();

  loading: boolean = false;
  completedSurgery: string;

  public openLanguagesModal(
    id: string = null,
    userId: string = this.profileId
  ) {
    const modalRef = this.modalService.open(SurgeryModalComponent, {
      centered: true,
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });

    modalRef.componentInstance.languageId = id;
    modalRef.componentInstance.userId = userId;

    modalRef.result
      .then(() => {
        this.refreshData$.next();
      })
      .catch((error) => {});
  }

  ngOnInit(): void {
    //this.loading = true;
    // this.refreshData$
    //   .pipe(
    //     debounceTime(300),
    //     switchMap((_) =>
    //       this.languageService.apiLanguageGetLanguagesForUserIdGet$Json({
    //         userId: this.profileId,
    //       })
    //     ),
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe({
    //     next: (result) => {
    //       this.completedLanguages = result;
    //       this.loading = false;
    //     },
    //     error: (error) => {
    //       this.loading = false;
    //     },
    //   });
    this.refreshData$.next();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
