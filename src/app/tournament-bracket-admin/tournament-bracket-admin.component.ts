import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tournament } from '../models/tournament.model'
import { Match } from '../models/match-single.model'
import { MatchService } from "../services/match-single.service";

@Component({
  selector: 'app-tournament-bracket-admin',
  templateUrl: './tournament-bracket-admin.component.html',
  styleUrls: ['./tournament-bracket-admin.component.scss']
})
export class TournamentBracketAdminComponent implements OnInit {

  constructor (private route: ActivatedRoute, private matchService: MatchService) { }

  tournament = <Tournament>{
    name: 'Primavera 2019',
    modality: 'Individual',
    category: 'Varonil',
    announcementStatus: 'Cerrada',
    tournamentStatus: 'Disputándose',
    beginDate: '01/02/2019',
    endDate: '01/04/2019',
    numberOfPlayers: 8,
    enrolledPlayers: [
      'Lilias	Benninger',
      'Manon	Didsbury',
      'Constantine	Steeden',
      'Clari	Newlove',
      'Justine	Di Bartolommeo',
      'Tanya	Segot',
      'Germain	Croxley',
      'Gilberta	Northam'],
    playedRounds: [true, true, false, false]
  }

  availablePlayers = [
    'Lilias	Benninger',
    'Manon	Didsbury',
    'Constantine	Steeden',
    'Clari	Newlove',
    'Justine	Di Bartolommeo',
    'Tanya	Segot',
    'Germain	Croxley',
    'Gilberta	Northam'];

  matches: Array<Match> = [
    {
      id: '',
      tournamentId: this.tournament.id,
      tournamentName: '',
      player: ['Lilias	Benninger', 'Manon	Didsbury'],
      winner: [],
      round: '1/4',
      firstRound: true,
      played: false,
      date: '01/01/2019',
      suspended: false,
      score: {
        team1: [
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      tournamentName: '',
      player: [],
      winner: [],
      round: '1/4',
      firstRound: true,
      played: false,
      date: '',
      suspended: false,
      score: {
        team1: [
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      tournamentName: '',
      player: [],
      winner: [],
      round: '1/4',
      firstRound: true,
      played: false,
      date: '',
      suspended: false,
      score: {
        team1: [
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      tournamentName: '',
      player: [],
      winner: [],
      round: '1/4',
      firstRound: true,
      played: false,
      date: '',
      suspended: false,
      score: {
        team1: [
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      tournamentName: '',
      player: [],
      winner: [],
      round: '1/2',
      played: false,
      date: '',
      suspended: false,
      score: {
        team1: [
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      tournamentName: '',
      player: [],
      winner: [],
      round: '1/2',
      played: false,
      date: '',
      suspended: false,
      score: {
        team1: [
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      tournamentName: '',
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      suspended: false,
      score: {
        team1: [
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
        ],
        team2: [
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
        ],
      }
    },

  ]

  onPlayersAssigned (selectedPlayers: string[]) {
    console.log('Se escucho el evento: assignedPlayers');
    console.log(selectedPlayers);
    selectedPlayers.forEach(element => {
      this.availablePlayers = this.availablePlayers.filter(word => word != element);
    });
    console.log(this.availablePlayers);
  }

  addMatchesToFirebase () {
    let matchesFirebase: Match[];
    console.log(this.tournament);
    // this.matchService.addTournamentMatches(this.tournament);
    let tournamentName: string = this.tournament.name;
    this.matchService.getMatchesFromTournament(this.tournament).subscribe(match => {
      matchesFirebase = match;
      console.log(matchesFirebase);
    });
  }

  ngOnInit () {
    this.tournament.id = this.route.snapshot.params['idTorneoSeleccionado'];
    // this.rolledPlayers = this.tournament.enrolledPlayers;
    // console.log(this.rolledPlayers);
  }

}
