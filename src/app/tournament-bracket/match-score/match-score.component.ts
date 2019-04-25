import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-score',
  templateUrl: './match-score.component.html',
  styleUrls: ['./match-score.component.css']
})
export class MatchScoreComponent implements OnInit {
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
