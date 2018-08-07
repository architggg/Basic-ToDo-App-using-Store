import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';
import { StoreModule } from '@ngrx/store';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { todos } from './reducers/appReducer';
import { ViewItemComponent } from './view-item/view-item.component';

const routes : Routes = [
  { path : "addItem", component : TodoitemComponent},
  { path : "viewItem", component : ViewItemComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TodoitemComponent,
    ViewItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({todos}),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
