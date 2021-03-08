import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { ListComponent } from './list/list.component';
import { ChildComponent } from './child/child.component';
import { AddTaskComponent } from './list/add-task/add-task.component';
import { TodotaskComponent } from './list/todotask/todotask.component';
import { DonetaskComponent } from './list/donetask/donetask.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    ListComponent,
    ChildComponent,
    AddTaskComponent,
    TodotaskComponent,
    DonetaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
