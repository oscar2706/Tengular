import { Component, OnInit, Input, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatSnackBar } from '@angular/material';
import { Match } from '../../models/match-single.model'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-match-score-admin',
  templateUrl: './match-score-admin.component.html',
  styleUrls: ['./match-score-admin.component.css'],
})
export class MatchScoreAdminComponent implements OnInit {
  @ViewChild('playersDialog') playersDialog: TemplateRef<any>;
  @ViewChild('dateDialog') dateDialog: TemplateRef<any>;
  @ViewChild('suspendDialog') suspendDialog: TemplateRef<any>;

  @Output() playersAssigned: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Input() tournamentPlayers: string[] = [];

  @Input() match = <Match>{
    id: '',
    tournamentId: '',
    player: [],
    winner: [],
    round: '1/4',
    firstRound: false,
    played: true,
    date: '01/01/2020',
    suspended: false,
    score: {
      team1: [
        { points: 6, tiebreakPoints: 0 },
        { points: 4, tiebreakPoints: 0 },
        { points: 6, tiebreakPoints: 0 }
      ],
      team2: [
        { points: 4, tiebreakPoints: 0 },
        { points: 6, tiebreakPoints: 0 },
        { points: 4, tiebreakPoints: 0 }
      ],
    }
  }

  selectedPlayer: string[] = ['', ''];
  selectedDate = '';
  availablePlayers1: string[];
  availablePlayers2: string[];

  rolledPlayers: string[];

  openedDialogRef: any;

  constructor (private dialog: MatDialog) { }

  // playersDialog
  openPlayersDialog (player: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.height = '16.5rem';
    dialogConfig.width = '40rem';
    this.openedDialogRef = this.dialog.open(this.playersDialog, dialogConfig);
    this.openedDialogRef.afterClosed().subscribe(
      data => {
      }
    );
  }

  savePlayersDialog () {
    this.openedDialogRef.close();
    this.match.player.push(this.selectedPlayer[0]);
    this.match.player.push(this.selectedPlayer[1]);
    this.match.date = this.selectedDate;
    this.tournamentPlayers.filter(player => player != this.selectedPlayer[0] || player != this.selectedPlayer[1]);
    console.log('Fecha: ', this.selectedDate);
    console.log(this.selectedPlayer);
    this.playersAssigned.emit(this.selectedPlayer);
  }

  closePlayersDialog () {
    console.log(this.selectedPlayer);
    this.selectedPlayer[0] = '';
    this.selectedPlayer[1] = '';
    this.selectedDate = '';
    this.openedDialogRef.close();
  }

  // dateDialog
  openDateDialog () {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.height = '12.5rem';
    dialogConfig.width = '30rem';
    this.openedDialogRef = this.dialog.open(this.dateDialog, dialogConfig);
    this.openedDialogRef.afterClosed().subscribe(
      data => {
      }
    );
  }

  saveDateDialog () {
    this.match.date = this.selectedDate.toString();
    this.openedDialogRef.close();
    this.selectedDate = '';
    console.log('feccha dateDialog = ' + this.match.date);
  }

  closeDateDialog () {
    this.selectedDate = '';
    this.openedDialogRef.close();
  }

  // suspendDialog
  opensuspendDialog () {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.height = '11rem';
    dialogConfig.width = '36rem';
    this.openedDialogRef = this.dialog.open(this.suspendDialog, dialogConfig);
    this.openedDialogRef.afterClosed().subscribe(
      data => {
      }
    );
  }

  savesuspendDialog () {
    this.match.suspended ? this.match.suspended = false : this.match.suspended = true;
    this.openedDialogRef.close();
  }

  closesuspendDialog () {
    this.openedDialogRef.close();
  }

  onUpdateDate (event) {
    let date = (new Date(event.target.value));
    this.selectedDate = date.toLocaleDateString();
    console.log(this.selectedDate);
  }

  onPlayerSelected (event, player: number) {
    // console.log(event.value);
    if (player == 0) {
      this.availablePlayers2 = this.tournamentPlayers.filter(player => player != event.value);
      console.log('Opciones para jugador 2: ' + this.availablePlayers2);
    }
    if (player == 1) {
      this.availablePlayers1 = this.tournamentPlayers.filter(player => player != event.value);
      console.log('Opciones para jugador 1: ' + this.availablePlayers1);
    }
  }
  //TODO: Funcion para checar los jugadores asignados de la primera ronda e ingresarlos en asignados

  ngOnInit () {
    this.availablePlayers1 = this.tournamentPlayers;
    this.availablePlayers2 = this.tournamentPlayers;
  }

}
