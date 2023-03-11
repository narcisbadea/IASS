import { SortEvent, SortDirection } from './../../../shared/sort';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PatientProfileDto } from 'src/app/shared/models/PatientProfileDto';
// import { UserProfileDto } from 'src/app/api/models';

@Component({
  selector: 'app-patients-table',
  templateUrl: './patients-table.component.html'
})
export class PatientsTableComponent {
  @Input() patients: PatientProfileDto[];
  @Input() loading: boolean;
  @Input() sortColumn: string;
  @Input() sortDirection: SortDirection;

  @Output() profilePreview: EventEmitter<string> = new EventEmitter();
  @Output() sort: EventEmitter<SortEvent> = new EventEmitter();

  onSelect(userId: string) {
    this.profilePreview.emit(userId);
  }

  onSort(sortEvent: SortEvent) {
    this.sort.emit(sortEvent);

    // manual update direction and column
    // this should be handles externally once sortin is implemented
    this.sortColumn = sortEvent.column;
    this.sortDirection = sortEvent.direction;
  }
}
