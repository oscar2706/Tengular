import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-bracket-info',
  templateUrl: './tournament-bracket-info.component.html',
  styleUrls: ['./tournament-bracket-info.component.scss']
})
export class TournamentBracketInfoComponent implements OnInit {
  inside = false;

  onInside () {
    this.inside = true;
  }

  onOutside () {
    this.inside = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
