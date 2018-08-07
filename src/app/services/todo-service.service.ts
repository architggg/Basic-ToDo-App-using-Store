import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { item } from '../models/Item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  public todos  = [];
  constructor( private _store : Store<item>) {
}
  public addItem(todo : item) : void {
    this._store.dispatch({
      type : 'ADD_TODO',
      payload : todo
    });
  }
}
