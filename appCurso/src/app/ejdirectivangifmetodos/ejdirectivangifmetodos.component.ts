import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangifmetodos',
  templateUrl: './ejdirectivangifmetodos.component.html',
  styleUrls: ['./ejdirectivangifmetodos.component.css']
})
export class EjdirectivangifmetodosComponent implements OnInit {

  capital: string;

  constructor() { }

  ngOnInit() {
  }

  setResultado() {
    return this.capital === 'Madrid' ? true : false;
  }

}
