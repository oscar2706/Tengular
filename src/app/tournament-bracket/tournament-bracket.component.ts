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
    numberOfPlayers: 16,
    enrolledPlayers: ['Ana', 'Pablo'],
    playedRounds: [true, true, false, false]
  }

  winners16: string[] = [];
  winners8: string[] = [];
  winners4: string[] = [];
  winners2: string[] = [];

  matches16: Match[];
  matches8: Match[];
  matches4: Match[];
  matches2: Match[];
  matches1: Match[];

  matches: Array<Match> = [
    {
      tournamentId: this.tournament.id,
      player: ['Juan', 'Pepe'],
      winner: [],
      round: '1/8',
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
      tournamentId: this.tournament.id,
      player: ['Wuicho', 'Deadpool'],
      winner: [],
      round: '1/8',
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
      tournamentId: this.tournament.id,
      player: ['Superman', 'Batman'],
      winner: [],
      round: '1/8',
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
      tournamentId: this.tournament.id,
      player: ['Diosito', 'Gomorra'],
      winner: [],
      round: '1/8',
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
      tournamentId: this.tournament.id,
      player: ['El pipila', 'Godzilla'],
      winner: [],
      round: '1/8',
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
      tournamentId: this.tournament.id,
      player: ['Naruto', 'Goku'],
      winner: [],
      round: '1/8',
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
      tournamentId: this.tournament.id,
      player: ['Calamardo', 'Gary'],
      winner: [],
      round: '1/8',
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
      tournamentId: this.tournament.id,
      player: ['El bien', 'El mal'],
      winner: [],
      round: '1/8',
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
      tournamentId: this.tournament.id,
      player: [],
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
      tournamentId: this.tournament.id,
      player: [],
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
      tournamentId: this.tournament.id,
      player: [],
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
      tournamentId: this.tournament.id,
      player: [],
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
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1/2',
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
      tournamentId: this.tournament.id,
      player: [],
      winner: [],
      round: '1/2',
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
      tournamentId: this.tournament.id,
      player: [],
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
          { points: 0, tiebreakPoints: 0 }
        ],
        team2: [
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 },
          { points: 0, tiebreakPoints: 0 }
        ],
      }
    },
  ]

  ngOnInit () {
    //Se podria obtener solo el numero de participantes y el nombre del torneo
    this.tournament.id = this.route.snapshot.params['idTorneoSeleccionado'];
    this.matches16 = this.matches.filter(element => element.round == '1/16');
    this.matches8 = this.matches.filter(element => element.round == '1/8');
    this.matches4 = this.matches.filter(element => element.round == '1/4');
    this.matches2 = this.matches.filter(element => element.round == '1/2');
    this.matches1 = this.matches.filter(element => element.round == '1');
    console.log(this.tournament);
  }

  inside = false;

  onWinnerSelected (round: number, player: string[]) {
    console.log('Ganador recibido = ', player);
    let eights0Played = false;
    if (this.matches8[0].played || this.matches8[1].played)
      eights0Played = true;

    let eights1Played = false;
    if (this.matches8[2].played || this.matches8[3].played)
      eights1Played = true;

    let eights2Played = false;
    if (this.matches8[4].played || this.matches8[5].played)
      eights2Played = true;

    let eights3Played = false;
    if (this.matches8[6].played || this.matches8[7].played)
      eights3Played = true;
    let eightsPlayed = false;
    if (eights0Played && eights1Played && eights2Played && eights3Played)
      eightsPlayed = true;


    let quartes0Played = false;
    if (this.matches4[0].played || this.matches4[1].played)
      quartes0Played = true;

    let quartes1Played = false;
    if (this.matches4[2].played || this.matches4[3].played)
      quartes1Played = true;

    switch (round) {
      case 16: {
        this.winners16.push(player[0]);
        if (this.winners16.length <= 2) {
          this.matches8[0].player.push(player[0])
        }
        else if (this.winners16.length <= 4) {
          this.matches8[1].player.push(player[0]);
        }
        else if (this.winners16.length <= 6) {
          this.matches8[2].player.push(player[0]);
        }
        else if (this.winners16.length <= 8) {
          this.matches8[3].player.push(player[0]);
        }
        else if (this.winners16.length <= 10) {
          this.matches8[4].player.push(player[0]);
        }
        else if (this.winners16.length <= 12) {
          this.matches8[5].player.push(player[0]);
        }
        else if (this.winners16.length <= 14) {
          this.matches8[6].player.push(player[0]);
        }
        else {
          this.matches8[7].player.push(player[0]);
        }
      }
      case 8: {

        if (eights0Played || eights1Played || eights2Played || eights3Played) {
          this.winners8.push(player[0]);
          if (this.winners8.length <= 2) {
            this.matches4[0].player.push(player[0])
          }
          else if (this.winners8.length <= 4) {
            this.matches4[1].player.push(player[0]);
          }
          else if (this.winners8.length <= 6) {
            this.matches4[2].player.push(player[0]);
          }
          else {
            this.matches4[3].player.push(player[0]);
          }
        }
        if (this.matches8.length == 0) {
          this.winners8.push(player[0]);
          if (this.winners8.length <= 2) {
            this.matches4[0].player.push(player[0])
          }
          else if (this.winners8.length <= 4) {
            this.matches4[1].player.push(player[0]);
          }
          else if (this.winners8.length <= 6) {
            this.matches4[2].player.push(player[0]);
          }
          else {
            this.matches4[3].player.push(player[0]);
          }
        }
      }
      case 4: {
        console.log('matches4 Jugados')
        this.matches4.forEach(element => {
          console.log(element.player + ' ', element.played);
        });

        if (quartes0Played || quartes1Played && eightsPlayed) {
          this.winners4.push(player[0]);
          this.winners4.length <= 2 ? this.matches2[0].player.push(player[0]) : this.matches2[1].player.push(player[0]);
        }

        if (this.matches4.length == 0) {
          this.winners4.push(player[0]);
          this.winners4.length <= 2 ? this.matches2[0].player.push(player[0]) : this.matches2[1].player.push(player[0]);
        }
      }
        break;
      case 2: {
        this.winners2.push(player[0]);
        this.matches1[0].player.push(player[0]);
      }
        break;

      default:
        break;
    }
  }

  autoRoleMatch () {

  }

  onInside () {
    this.inside = true;
  }

  onOutside () {
    this.inside = false;
  }

}
