import { Component, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { combineLatest, map, Observable } from 'rxjs';
import { PatientsStateService } from 'src/app/core/services/patients-state.service';
import { PatientProfileDto } from 'src/app/shared/models/PatientProfileDto';
import { of } from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  providers: [PatientsStateService],
})
export class PatientsComponent implements OnInit {
  searchCriteria: {
    name: string;
    age: number[];
  } = {
    name: '',
    age: [],
  };

  age$: Observable<number[]>;
  patientsData$: Observable<{
    patients: PatientProfileDto[];
    loading: boolean;
    currentPage: number;
    totalCount: number;
  }>;

  readonly pageSize: number = 5;

  constructor(
    private patientsState: PatientsStateService
  ) {
    this.patientsData$ = combineLatest([
      this.patientsState.store.select('patients'),
      this.patientsState.store.select('loading'),
      this.patientsState.store.select('currentPage'),
      this.patientsState.store.select('totalCount'),
    ]).pipe(
      map(([patients, loading, currentPage, totalCount]) => ({
        patients,
        loading,
        currentPage,
        totalCount,
      }))
    );
  }

  ngOnInit(): void {
    this.age$ = of(Array.from({ length: 100 }, (_, i) => i));
    this.search();
  }

  search() {
    this.patientsState.store.setState({
      ...this.searchCriteria,
      skip: 0,
      take: this.pageSize,
      currentPage: 1,
    });
  }

  reset() {
    this.searchCriteria = { name: '', age: [] };
    this.patientsState.store.setState({
      ...this.searchCriteria,
      skip: 0,
      take: this.pageSize,
      currentPage: 1,
    });
  }

  onPageChange(pageChange) {
    this.patientsState.store.setState({
      ...this.searchCriteria,
      skip: (pageChange - 1) * this.pageSize, //move currentPage to state
      take: this.pageSize,
      currentPage: pageChange,
    });
  }

  showProfilePreview(userId: string) {
  }
}
