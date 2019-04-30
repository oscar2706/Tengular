import { Component, OnInit } from '@angular/core';
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-players-tournament-info',
  templateUrl: './players-tournament-info.component.html',
  styleUrls: ['./players-tournament-info.component.css']
})
export class PlayersTournamentInfoComponent implements OnInit {
  players: Section[] = [
    {
      name: 'Rafael Nadal',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Novak Đoković',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Roger Federer',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Fabio Fognini',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Stan Wawrinka',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Dominic Thiem',
      updated: new Date('1/17/16'),
    },
    {
      name: 'John Isner',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Juan Martin del Potro',
      updated: new Date('1/17/16'),
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
