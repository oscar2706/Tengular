import { Component, OnInit, Input, Inject, OnChanges } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { Match } from '../../models/match-single.model'
import { ScoreDialogComponent } from "../score-dialog/score-dialog.component";

@Component({
  selector: 'app-match-score',
  templateUrl: './match-score.component.html',
  styleUrls: ['./match-score.component.css']
})
export class MatchScoreComponent implements OnInit, OnChanges {

  @Input() match = <Match>{
    id: '',
    tournamentId: '',
    player: ['Roger Federer', 'Rafael Nadal'],
    winner: ['Roger Federer'],
    round: '1/4',
    played: true,
    date: '01/01/2020',
    susspended: false,
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

  dialogData: any;

  constructor (public dialog: MatDialog) { }

  openDialog (): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '35rem';
    dialogConfig.height = '17rem';
    dialogConfig.data = this.match;

    const dialogRef = this.dialog.open(ScoreDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data != undefined) {
          this.match = data;
          console.log(this.match);
        }
        else {
          console.log('Dialogo cerrado sin guardar');
        }
      }
    );
  }

  updateMatch (newMatch) {
    console.log('updateMatch Called!');
    this.match = newMatch;
  }

  getWinnerCssClass (round: string): string {
    return round == '1' ? 'winner' : 'champion';
  }

  ngOnInit () {
  }

  ngOnChanges () {
    console.log('Se cambio el resultado!! :D');
    // console.log('Partido = ' + this.match);
  }

  inside = false;

  onInside () {
    this.match.played == false && this.match.player.length != 0 ? this.inside = true : this.inside = false;
  }

  onOutside () {
    this.inside = false;
  }

}
