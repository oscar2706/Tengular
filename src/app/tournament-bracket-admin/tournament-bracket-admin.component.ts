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

  matches32: Match[];
  matches16: Match[];
  matches8: Match[];
  matches4: Match[];
  matches2: Match[];
  matches1: Match[];
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
        this.matches32 = this.matches.filter(element => element.round == '1/32');
        this.matches16 = this.matches.filter(element => element.round == '1/16');
        this.matches8 = this.matches.filter(element => element.round == '1/8');
        this.matches4 = this.matches.filter(element => element.round == '1/4');
        this.matches2 = this.matches.filter(element => element.round == '1/2');
        this.matches1 = this.matches.filter(element => element.round == '1');
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
