import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { item } from '../models/Item.model';
import { TodoServiceService } from '../services/todo-service.service';
import { Store } from '@ngrx/store';
import { store } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})

export class TodoitemComponent implements OnInit 
{
  added : boolean = true;
  name : string;
  startDate : Date;
  endDate : Date;
  items : item[] = [];
  
  constructor(private _todoService : TodoServiceService) { }

  ngOnInit() {}

  public addItem(){
    if(this.startDate > this.endDate){
      alert(" Start Date should be Greater than End Date");
    }
    else if(this.name === '' || this.startDate === null || this.endDate === null){
      alert(" Field cannot be null");
    }
    else{
      this.added = false;
      this.items.push({itemName : this.name, startDate : this.startDate, endDate : this.endDate});
      this.name = null;
      this.startDate = null;
      this.endDate = null;
    }
  }
  public removeItem(e)
  {
    this.items.splice(e,1);
    if(this.items.length === 0){
      this.added = true;
    }
  }
  public submit()
  {
    //console.log(this.items);
    this.items.forEach(element => {
      this._todoService.addItem({itemName : element.itemName, startDate : element.startDate, endDate : element.endDate});  
    });
    console.log("Submit Clicked");
    this.items = [];
  }

}