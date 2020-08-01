import { StoreService } from './service/store.service';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-redux';
  store: Observable<any>;

  constructor( private storeService: StoreService ) {}

  ngOnInit() {
    this.store = this.storeService.state;
  }

  add() {
    this.storeService.add();
  }

  remove() {
    this.storeService.remove();
  }

}
