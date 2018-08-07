import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { item } from '../models/Item.model';
import { AppState } from '../app.state';

@Component({
  selector: 'app-viewItem',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  items : any[];
  constructor( private _store : Store<AppState>) { }

  ngOnInit() {

    this._store.select('todos').
      subscribe( (todos) => {
        this.items = todos;
    });
    //console.log(this.items);
  }
}
