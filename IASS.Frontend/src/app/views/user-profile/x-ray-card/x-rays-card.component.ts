import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, Subject, switchMap, takeUntil } from 'rxjs';
import { XRayForUserDto } from 'src/app/api/models';
import { XRayService } from 'src/app/api/services';
import { XRayModalComponent } from './x-ray-modal/x-rays-modal.component';
import { XRayViewModalComponent } from './x-ray-view-modal/x-ray-view-modal.component';

@Component({
  selector: 'app-x-ray-card',
  templateUrl: './x-rays-card.component.html'
})
export class XRayCardComponent implements OnInit {
  @Input() profileId: string;
  xrays: XRayForUserDto[];
  constructor(
    public modalService: NgbModal,
    private xrayService: XRayService
      ) {}

  refreshData$: Subject<void> = new Subject<void>();
  destroy$: Subject<void> = new Subject<void>();

  loading: boolean = false;
  completedSurgery: string;

  public openxraysModal(
    userId: string = this.profileId
  ) {
    const modalRef = this.modalService.open(XRayModalComponent, {
      centered: true,
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    modalRef.componentInstance.userId = userId;

    modalRef.result
      .then(() => {
        this.refreshData$.next();
      })
      .catch((error) => {});
  }

  public openxraysViewModal(
    xRayId: string = null,
    description: string = null
  ) {
    const modalRef = this.modalService.open(XRayViewModalComponent, {
      centered: true,
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });

    modalRef.componentInstance.xRayId = xRayId;
    modalRef.componentInstance.description = description;

    modalRef.result
      .then(() => {
        this.refreshData$.next();
      })
      .catch((error) => {});
  }

  ngOnInit(): void {
    this.loading = true;
    this.refreshData$
      .pipe(
        debounceTime(300),
        switchMap((_) =>
          this.xrayService.apiXRayGet$Json({userId:this.profileId})
        ),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (result) => {
          this.xrays = result;
          this.loading = false;
        },
        error: (error) => {
          this.loading = false;
        },
      });
    this.refreshData$.next();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
