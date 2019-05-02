import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, } from '@angular/material';

@Component({
  selector: 'app-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.css']
})
export class ScoreDialogComponent implements OnInit {
  ronda = '1/4';
  score = {
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
    ]
  }

  tiebreakRegistered = false;

  constructor (public dialogRef: MatDialogRef<ScoreDialogComponent>) { }

  onNoClick (): void {
    this.dialogRef.close();
  }

  printScore () {
    console.log(this.score);
    this.dialogRef.close();
  }

  ngOnInit () {
  }

}
