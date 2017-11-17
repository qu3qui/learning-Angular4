import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejpropertybinding',
  templateUrl: './ejpropertybinding.component.html',
  styleUrls: ['./ejpropertybinding.component.css']
})
export class EjpropertybindingComponent implements OnInit {

  texto = 'Hola mundo';
  constructor() {
  setTimeout(() => {
    this.texto = 'chao mundo cruel';
  }, 3000);
  }

  ngOnInit() {
  }

}
