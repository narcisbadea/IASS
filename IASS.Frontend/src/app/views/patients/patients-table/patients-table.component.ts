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

  @Output() profileView: EventEmitter<string> = new EventEmitter();
  @Output() sort: EventEmitter<SortEvent> = new EventEmitter();

  onSelect(user: PatientProfileDto): void {
    this.profileView.emit(user.id);
  }

  onSort(sortEvent: SortEvent) {
    this.sort.emit(sortEvent);

    // manual update direction and column
    // this should be handles externally once sortin is implemented
    this.sortColumn = sortEvent.column;
    this.sortDirection = sortEvent.direction;
  }
}
