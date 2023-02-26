import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit, OnDestroy {
  @Input() profileId: string ='';

  briefInfo: string = "";
  loading: boolean = true;

  refreshData$: Subject<void> = new Subject<void>();
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    public modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.loading = false;
    this.refreshData$.next();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public briefInfoModal(userId: string = this.profileId) {

  }
}
