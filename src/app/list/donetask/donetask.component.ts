import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-donetask',
  templateUrl: './donetask.component.html',
  styleUrls: ['./donetask.component.css']
})
export class DonetaskComponent implements OnInit {

  @Input()
  taskDone: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
