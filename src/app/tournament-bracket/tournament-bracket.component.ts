import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tournament } from '../models/tournament.model'
import { Match } from '../models/match-single.model'

@Component({
  selector: 'app-tournament-bracket',
  templateUrl: './tournament-bracket.component.html',
  styleUrls: ['./tournament-bracket.component.scss']
})
export class TournamentBracketComponent implements OnInit {
  constructor (private route: ActivatedRoute) { }
  tournament = <Tournament>{
    id: '',
    name: 'Primavera 2019',
    modality: 'Individual',
    category: 'Varonil',
    announcementStatus: 'Cerrada',
    tournamentStatus: 'Dispotandose',
    beginDate: '01/02/2019',
    endDate: '01/04/2019',
    numberOfPlayers: 8,
    enrolledPlayers: ['Ana', 'Pablo'],
    playedRounds: [true, true, false, false]
  }

  matches: Array<Match> = [
    {
      id: '',
      tournamentId: this.tournament.id,
      player: ['Juan', 'Oscar'],
      winner: [],
      round: '1/4',
      played: false,
      date: '01/01/2020',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: ['Pedro', 'Pepe'],
      winner: ['Pepe'],
      round: '1/4',
      played: true,
      date: '01/01/2020',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: ['Roger Federer', 'Rafael Nadal'],
      winner: ['Roger Federer'],
      round: '1/4',
      played: true,
      date: '01/01/2020',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: ['Pablo Morales', 'Leonardo Amador'],
      winner: ['Leonardo Amador'],
      round: '1/4',
      played: true,
      date: '01/01/2020',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1/2',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: ['Roger Federer', 'Leonardo Amador'],
      winner: [],
      round: '1/4',
      played: false,
      date: '01/01/2020',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: ['Sodoma', 'Gomorra'],
      winner: ['Sodoma'],
      round: '1',
      played: true,
      date: '01/01/2020',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
    {
      id: '',
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1',
      played: false,
      date: '',
      susspended: false,
      score: {
        team1: [
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 6, tiebreakPoints: 0 },
          { points: 4, tiebreakPoints: 0 },
          { points: 6, tiebreakPoints: 0 }
        ],
      }
    },
  ]
  ngOnInit () {
    //Se podria obtener solo el numero de participantes y el nombre del torneo
    this.tournament.id = this.route.snapshot.params['idTorneoSeleccionado'];
    console.log(this.tournament);
  }

  inside = false;

  onInside () {
    this.inside = true;
  }

  onOutside () {
    this.inside = false;
  }

}
