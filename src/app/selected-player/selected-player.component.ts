import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../models/player.model';
import { PlayerService } from '../services/player.service';

export interface Match {
  result?: boolean;
  opponentName: string;
  round: string;
  tournament: string;
  matchDate: string;
}

const NEXT_MATCHES: Match[] = [
  { opponentName: "Rafael Nadal", round: '1/4 de final', tournament: "Primavera 2019", matchDate: 'Hoy - 16:00' },
  { opponentName: "Novak Djokovic", round: 'final', tournament: "ATP 100 Miami", matchDate: 'Mañana - 15:00' },
  { opponentName: "Alexander Zverev", round: '1/8 de final', tournament: "Verano 2019", matchDate: '18/05/2019 - 17:00' },
];

const MATCHES: Match[] = [
  { result: true, opponentName: "Rafael Nadal", round: '1/4 de final', tournament: "Primavera 2019", matchDate: 'Ayer - 15:30' },
  { result: false, opponentName: "Novak Djokovic", round: 'semifinal', tournament: "ATP 1000 Miami", matchDate: '03/03/2019 - 12:30' },
  { result: true, opponentName: "Alexander Zverev", round: '1/8 de final', tournament: "Verano 2019", matchDate: '03/03/2019 - 13:30' },
  { result: true, opponentName: "Fabio Fognini", round: '1/4 de final', tournament: "ATP 1000 California", matchDate: '03/03/2019 - 17:30' },
  { result: false, opponentName: "Milos Raonic", round: 'final', tournament: "Primavera 2019", matchDate: '03/03/2019 - 14:00' },
];
@Component({
  selector: 'app-selected-player',
  templateUrl: './selected-player.component.html',
  styleUrls: ['./selected-player.component.css']
})
export class SelectedPlayerComponent implements OnInit {
  players: Player[];
  displayedColumns: string[] = ['opponentName', 'round', 'tournament', 'matchDate'];
  sourceNextMatches = NEXT_MATCHES;
  displayedColumns2: string[] = ['result', 'opponentName', 'round', 'tournament', 'matchDate'];
  sourceMatches = MATCHES;
  
  constructor(private _route: ActivatedRoute, private playerService: PlayerService) { }

  ngOnInit() {
    let nameP = this._route.snapshot.paramMap.get('imageP');
    this.playerService.getPlayerSelect(nameP).subscribe(players => {
      this.players = players;
      console.log(this.players);
    });
  }

}
