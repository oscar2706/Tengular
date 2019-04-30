import { Component, OnInit } from '@angular/core';

export interface Tile {
  id: boolean;
  color: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-selected-tournament',
  templateUrl: './selected-tournament.component.html',
  styleUrls: ['./selected-tournament.component.css']
})
export class SelectedTournamentComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  constructor() { }

  ngOnInit() {
  }

}
