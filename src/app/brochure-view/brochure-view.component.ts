import { Component, OnInit } from '@angular/core';
import { Tournament } from '../models/tournament.model';
import { TournamentService } from '../services/tournament.service';

@Component({
  selector: 'app-brochure-view',
  templateUrl: './brochure-view.component.html',
  styleUrls: ['./brochure-view.component.css']
})
export class BrochureViewComponent implements OnInit {
  tournaments: Tournament[];

  constructor(private tournamentService: TournamentService) { }

  ngOnInit() {
    this.tournamentService.getTournament().subscribe(tournaments => {
      this.tournaments = tournaments;
      console.log(this.tournaments);
    });
  }

}
