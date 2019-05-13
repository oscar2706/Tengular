import { Component, OnInit } from '@angular/core';
import { Match } from '../models/match-single.model'
import { Tournament } from '../models/tournament.model'
import {MatchService} from '../services/match-single.service';
import { Player } from '../models/player.model';

export interface More {
  value:number;
}

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})

export class ScoresComponent implements OnInit {
  matches:Match[];
  modalitySelected = 'option1';
  categorySelected = 'option1';

  more2:More={
    value:3
  }

  constructor (private matchService: MatchService ) { }
  
  onClick2(){
    this.more2.value=this.more2.value+3;
  }
  
  ngOnInit () {
    this.matchService.getPlayedMatches().subscribe(matches => {
      this.matches = matches;
      console.log(this.matches);
    });
  }

}
