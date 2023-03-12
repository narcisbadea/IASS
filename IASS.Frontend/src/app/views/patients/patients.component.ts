import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, debounceTime, map, Observable, of, Subject, switchMap, takeUntil } from 'rxjs';
import { UserService } from 'src/app/api/services';
import { PatientsStateService } from 'src/app/core/services/patients-state.service';
import { PatientProfileDto } from 'src/app/shared/models/PatientProfileDto';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  providers: [PatientsStateService],
})
export class PatientsComponent implements OnInit, OnDestroy {

  constructor(
    private patientsState: PatientsStateService,
    private router: Router,
    private userService: UserService
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
  ngOnDestroy(): void {
    
  }

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

  doctorCode: string ="";
  refreshData$: Subject<void> = new Subject<void>();
  destroy$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.age$ = of(Array.from({ length: 100 }, (_, i) => i));
    this.search();
    this.refreshData$
      .pipe(
        debounceTime(300),
        switchMap((_) =>
          this.userService.apiUserDoctorCodeGet$Json()
        ),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (result) => {
          this.doctorCode = result;
        },
        error: (error) => {
          //this.loading = false;
        },
      });
    this.refreshData$.next();
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

  goToProfile(event: string): void {
    const userId = event;
    console.log(userId);
    this.router.navigate(['patients', userId]);
  }
}
