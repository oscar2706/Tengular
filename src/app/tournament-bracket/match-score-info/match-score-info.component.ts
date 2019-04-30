import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-score-info',
  templateUrl: './match-score-info.component.html',
  styleUrls: ['./match-score-info.component.css']
})
export class MatchScoreInfoComponent implements OnInit {
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
