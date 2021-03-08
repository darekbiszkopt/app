import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  add(task: string) {
    this.tasksList.push(task);


  }

  remove(task: string) {

    this.tasksList = this.tasksList.filter(e => e !== task);

  }

  done(task: string) {

    this.tasksDone.push(task);
    this.remove(task);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
