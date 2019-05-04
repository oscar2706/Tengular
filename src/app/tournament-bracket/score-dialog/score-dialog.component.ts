import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Match } from '../../models/match-single.model'
@Component({
  selector: 'app-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.css']
})
export class ScoreDialogComponent implements OnInit {
  match = <Match>{
    id: '',
    tournamentId: '',
    player: [],
    winner: [],
    round: '',
    played: false,
    date: '',
    susspended: false,
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
  }

  tiebreakRegistered = false;

  constructor (
    public dialogRef: MatDialogRef<ScoreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.match = data;
    console.log('Partido cargado en el dialogo =');
    console.log(this.match);
  }

  onNoClick (): void {
    this.dialogRef.close();
  }

  printScore () {
    this.dialogRef.close(this.match);
  }

  ngOnInit () {
  }

}
