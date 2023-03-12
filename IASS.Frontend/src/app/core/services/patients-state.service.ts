import { Injectable, OnDestroy } from '@angular/core';
import { combineLatest, debounceTime, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { UserForTableDtoPage } from 'src/app/api/models';
import { UserService } from 'src/app/api/services';
import { PatientProfileDto } from 'src/app/shared/models/PatientProfileDto';
import { Store } from './store';

@Injectable()
export class PatientsStateService implements OnDestroy {
  private destroy: Subject<void> = new Subject<void>();

  store = new Store<{
    patients: PatientProfileDto[];
    name: string;
    age: number[];
    skip: number;
    take: number;
    loading: boolean;
    currentPage: number;
    totalCount: number;
  }>({
    patients: [],
    name: '',
    age: [],
    skip: 0,
    take: 0,
    loading: true,
    currentPage: 1,
    totalCount: 0,
  });

  constructor(private userService:UserService) {
    this.init();
  }

  init() {
    combineLatest({
      name: this.store.select('name'),
      age: this.store.select('age'),
      skip: this.store.select('skip'),
      take: this.store.select('take'),
    })
      .pipe(
        debounceTime(300),
        tap(() => this.store.setState({ loading: true })),
        switchMap(({ name, age, skip, take }) => {
          return this.userService.apiUserSearchPost$Json({
            body: { name, age, skip, take },
          });
        }),
        takeUntil(this.destroy)
      )
      .subscribe({
        next: (response: UserForTableDtoPage) => {
          //add page
          this.store.setState({
            patients: response.items,
            totalCount: response.totalCount,
            loading: false,
          });
        },
        error: (err) => {
          this.store.setState({ loading: false }), console.log(err);
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
