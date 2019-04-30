import { Component, OnInit } from '@angular/core';

export interface Player{
  name: string;
  nacimiento: string;
  edad: number;
  residencia: string;
  peso:number;
  estatura: number;
  entrenador: string;
  ranking: number;
}
@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  player: Player={
    name: 'Roger Federer',
    nacimiento: 'Berna, Suiza',
    edad: 37,
    residencia: 'Nueva York, EEUU',
    peso:85,
    estatura: 185,
    entrenador: 'Severin Luthi',
    ranking: 1,
  }
  constructor() { }

  ngOnInit() {
  }

}
