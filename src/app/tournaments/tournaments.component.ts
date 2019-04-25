import { Component, OnInit } from '@angular/core';

export interface Cat {
  value: string;
  viewValue: string;
}

export interface Gen {
  value: string;
  viewValue: string;
}

export interface Mod {
  value: string;
  viewValue: string;
}

@Component({

  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TorneosComponent implements OnInit {
  
  cats: Cat[] = [
    {value: 'varonil-0', viewValue: 'Varonil'},
    {value: 'femenil-1', viewValue: 'Femenil'},
    {value: 'mixto-2', viewValue: 'Mixto'}
  ];

  mods: Mod[] = [
    {value: 'sencillos-0', viewValue: 'Sencillos'},
    {value: 'dobles-1', viewValue: 'Dobles'}
  ];

  gens: Gen[] = [
    {value: 'femenino-0', viewValue: 'Femenino'},
    {value: 'masculino-1', viewValue: 'Masculino'}
  ];

  constructor() { }

  ngOnInit() {
    
  }



}
