import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  newTask: string;

  taskList: Array<string> = [];

  add() {
    this.taskList.push(this.newTask);
  }




  constructor() { }

  ngOnInit(): void {
  }

}
