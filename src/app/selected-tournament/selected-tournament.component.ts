import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tournament } from '../models/tournament.model';
import { TournamentService } from '../services/tournament.service';

export interface Tile {
  id: boolean;
  color: string;
  cols: number;
  rows: number;
}

export interface Match {
  name: string;
  lastname: string;
  position: string;

}

const NEXT_MATCHES: Match[] = [
  { name: "Rafael ", lastname: 'Nadal', position: "2" },
  { name: "Novak ", lastname: 'Djokovic', position: "1"},
  { name: "Alexander ", lastname: 'Zverev', position: "5"},
  { name: "Alexander ", lastname: 'Zverev', position: "9"},
  { name: "Alexander ", lastname: 'Zverev', position: "3"},
];

@Component({
  selector: 'app-selected-tournament',
  templateUrl: './selected-tournament.component.html',
  styleUrls: ['./selected-tournament.component.css']
})
export class SelectedTournamentComponent implements OnInit {
  tournaments: Tournament[];
  displayedColumns: string[] = ['name', 'lastname', 'position'];
  sourceNextMatches = NEXT_MATCHES;

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  constructor(private _route: ActivatedRoute, private tournamentService: TournamentService) { }

  ngOnInit() {
    let nameT = this._route.snapshot.paramMap.get('imageT');
    this.tournamentService.getTournamentSelect(nameT).subscribe(tournaments => {
      this.tournaments = tournaments;
      console.log(this.tournaments);
    });
  }

}
