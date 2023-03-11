import { BehaviorSubject, Observable, distinctUntilChanged, map } from 'rxjs';

export class Store<T extends Object> {
  private state: BehaviorSubject<T>;

  constructor(initialState: T) {
    this.state = new BehaviorSubject(initialState);
  }

  setState(partialState: Partial<T>): void {
    this.state.next({ ...this.state.value, ...partialState });
  }

  getCurrentState(): T {
    return this.state.value;
  }

  getState(): Observable<T> {
    return this.state.pipe(distinctUntilChanged());
  }

  select<K extends keyof T>(key: K): Observable<T[K]> {
    return this.state.pipe(
      map((state: T) => state[key]),
      distinctUntilChanged()
    );
  }
}
