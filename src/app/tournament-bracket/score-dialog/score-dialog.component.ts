import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Match } from '../../models/match-single.model'
import { forEach } from '@angular/router/src/utils/collection';
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

  constructor (
    public dialogRef: MatDialogRef<ScoreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.match = data;
    console.log('Partido cargado en el dialogo =');
    console.log(this.match);
  }

  onPointChange (event: any, set: number, team: number) {
    let valueAsNumber = +event.target.value;
    if (valueAsNumber < 0) 
      team == 1 ? this.match.score.team1[set].points = 0 : this.match.score.team2[set].points = 0;
    if (valueAsNumber > 7) 
      team == 1 ? this.match.score.team1[set].points = 7 : this.match.score.team2[set].points = 7;
    if (valueAsNumber == 7) {
      team == 1 ? this.match.score.team2[set].points = 6 : this.match.score.team2[set].points = 6;
      // console.log('team1: ' + this.match.score.team1);
      // console.log('team2: ' + this.match.score.team2);
    }
  }

  hasSixPoints (player: number, set: number): boolean {
    if (player < 1 || player > 2) {
      console.log('hasSixPoints - player out of range');
      return null;
    }
    else {
      if (player == 1)
        return this.match.score.team1[set].points == 6 ? true : false;
      else // player == 2
        return this.match.score.team2[set].points == 6 ? true : false;
    }
  }

  getSetWinner (set: number): number {
    let team1 = this.match.score.team1;
    let team2 = this.match.score.team2;
    if (team1[set].points <= 6 && team2[set].points <= 6) {
      if (this.hasSixPoints(1, set) || this.hasSixPoints(2, set))
        return team1[set].points > team2[set].points ? 1 : 2;
      else
        return 0; // Empate
    }
    else { // Tiebreak
      if (team1[set].points == team2[set].points)
        return 0; // Empate
      else
        return team1[set].points > team2[set].points ? 1 : 2;
    }
  }

  getTeamWonSets (team: number): number {
    let wonSets = 0;
    if (this.match.round == '1') { // Final
      for (let i = 0; i < 5; i++) {
        console.log('Final');
      }
    }
    else { // Otra ronda
      for (let i = 0; i < 3; i++) {
        if (this.getSetWinner(i) == team)
          wonSets++;
      }
    }
    return wonSets;
  }

  calculateWinner () {
    let winner = this.match.winner;
    let team1WonSets = 0;
    let team2WonSets = 0;
    team1WonSets = this.getTeamWonSets(1);
    team2WonSets = this.getTeamWonSets(2);
    if (team1WonSets == team2WonSets)
      console.log('Hubo empate');
    else {
      // TODO:Checar que sean minimo 2 ganados o en final que sean 3
      team1WonSets > team2WonSets ? winner.push(this.match.player[0]) : winner.push(this.match.player[1]);
    }
    this.match.winner = winner;
  }

  clearScore () {
    this.match.score.team1.forEach(element => {
      element.points = 0;
      element.tiebreakPoints = 0;
    });
    this.match.score.team2.forEach(element => {
      element.points = 0;
      element.tiebreakPoints = 0;
    });
  }

  save () {
    this.calculateWinner();
    if (this.match.winner.length != 0) // Si el arreglo esta vacio aun no hay un ganador
      this.dialogRef.close(this.match);
  }
  close (): void {
    // this.clearScore();
    this.dialogRef.close();
  }

  ngOnInit () {
  }

}
