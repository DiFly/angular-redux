import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import store from './../redux/store';
import { addNumber, removeNumber } from '../redux/actions';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  state: BehaviorSubject<any>;
  unsubscribe: any;

  constructor() {
    store.subscribe(() => {
      this.state.next(store.getState());
      console.log(store.getState())
    });

    this.state = new BehaviorSubject<any>(store.getState());
  }

  add(): void {
    console.log("dispatch ADD")
    store.dispatch(addNumber(5));
  }

  remove(): void {
    console.log("dispatch REMOVE")
    store.dispatch(removeNumber(5));
  }


}
