import { Component, OnInit } from '@angular/core';
import { Match } from '../models/match-single.model'
import { Tournament } from '../models/tournament.model'

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})

export class ScoresComponent implements OnInit {
  modalitySelected = 'option1';
  categorySelected = 'option1';
  constructor () { }

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
      player: ['Stefanos Tsitsipas', 'Joao Domingues'],
      winner: [],
      round: '1/4',
      played: false,
      date: '01/01/2020',
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
      player: ['Pedro', 'Pepe'],
      winner: ['Pepe'],
      round: '1/4',
      played: true,
      date: '01/01/2020',
      suspended: false,
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
      suspended: false,
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
      suspended: false,
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
      suspended: false,
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
      player: ['Pierre-Hugues Herbert', 'Roberto Carballes Baena'],
      winner: [],
      round: '1',
      played: false,
      date: '01/01/2020',
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
  ngOnInit () {
  }

}
