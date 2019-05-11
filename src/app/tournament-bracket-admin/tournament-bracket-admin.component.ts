import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentService } from "../services/tournament.service";
import { Tournament } from '../models/tournament.model'
import { Match } from '../models/match-single.model'
import { MatchService } from "../services/match-single.service";

@Component({
  selector: 'app-tournament-bracket-admin',
  templateUrl: './tournament-bracket-admin.component.html',
  styleUrls: ['./tournament-bracket-admin.component.scss']
})
export class TournamentBracketAdminComponent implements OnInit, OnChanges {

  constructor (
    private route: ActivatedRoute,
    private matchService: MatchService,
    private tournamentService: TournamentService
  ) { }
  // @Input() tournamentId: string;

  @Input() tournament: Tournament;

  availablePlayers = [];

  matches: Match[];

  onPlayersAssigned (selectedPlayers: string[]) {
    console.log('Se escucho el evento: assignedPlayers');
    console.log(selectedPlayers);
    selectedPlayers.forEach(element => {
      this.availablePlayers = this.availablePlayers.filter(word => word != element);
    });
    console.log(this.availablePlayers);
  }

  addMatchesToFirebase () {
    this.matchService.addTournamentMatches(this.tournament);
  }

  ngOnInit () {

  }

  ngOnChanges () {
    if (this.tournament != undefined) {
      this.matchService.getMatchesFromTournament(this.tournament).subscribe(matches => {
        this.matches = matches;
        console.log('Partidos del torneo: ' + this.tournament.name, this.matches);
      });
      this.availablePlayers = this.tournament.enrolledPlayers;
    }
    // if (this.tournamentId != undefined) {
    //   this.tournamentService.getTournamentFromId(this.tournamentId).subscribe(gotTournament => {
    //     this.tournament = gotTournament;
    //     console.log('Torneo en bracket =');
    //     console.log(this.tournament);
    //     this.availablePlayers = this.tournament.enrolledPlayers;
    //   });
    //   this.matchService.getMatchesFromTournament(this.tournament).subscribe(matches => {
    //     this.matches = matches;
    //     console.log(this.matches);
    //   });
    // }
  }

}
