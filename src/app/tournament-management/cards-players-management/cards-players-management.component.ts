import { Component, OnInit } from '@angular/core';
export interface Player{
  name: string;
  ranking: number;
  edad: number;
  nacimiento: string;
}
export interface Player{

}
@Component({
  selector: 'app-cards-players-management',
  templateUrl: './cards-players-management.component.html',
  styleUrls: ['./cards-players-management.component.css']
})
export class CardsPlayersManagementComponent implements OnInit {

  player: Player={
    name: 'Roger Federer',
    ranking: 1,
    edad: 37,
    nacimiento: 'Berna, Suiza',
  }
  constructor() { }

  ngOnInit() {
  }

}
