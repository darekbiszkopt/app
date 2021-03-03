import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  newTask: string;
  taskList: Array<string> = [];
  taskDone: Array<string> = [];

  add() {
    this.taskList.push(this.newTask);
    this.newTask = '';
    console.log(this.taskList);
  }

  remove(task: string) {

    this.taskList = this.taskList.filter(e => e !== task);

  }

  done(task: string) {

    this.taskDone.push(task);
    this.remove(task)
    console.log(this.taskDone)

  }


  constructor() { }

  ngOnInit(): void {
  }

}
