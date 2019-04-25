import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-bracket',
  templateUrl: './tournament-bracket.component.html',
  styleUrls: ['./tournament-bracket.component.scss']
})
export class TournamentBracketComponent implements OnInit {
  inside = false;

  onInside () {
    this.inside = true;
  }

  onOutside () {
    this.inside = false;
  }

  constructor () { }

  ngOnInit () {
  }

}
