import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { TournamentRegistrationComponent } from './tournament-registration/tournament-registration.component';
import { PlayerRegistrationComponent } from './player-registration/player-registration.component';

export interface Cat {
  value: string;
  viewValue: string;
}

export interface Gen {
  value: string;
  viewValue: string;
}

export interface Mod {
  value: string;
  viewValue: string;
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-tournament-management',
  templateUrl: './tournament-management.component.html',
  styleUrls: ['./tournament-management.component.css']
})
export class TournamentManagementComponent implements OnInit {

 
  constructor(public dialog: MatDialog) { }
  
  onCreateTournament(){
    const dialogConfig1= new MatDialogConfig();
    dialogConfig1.disableClose=false;
    dialogConfig1.width="40%";
    this.dialog.open(TournamentRegistrationComponent,dialogConfig1 );
  }

  onCreatePlayer(){
    const dialogConfig2= new MatDialogConfig();
    dialogConfig2.disableClose=false;
    dialogConfig2.width="40%";
    this.dialog.open(PlayerRegistrationComponent,dialogConfig2 );
  }

  ngOnInit() {
  }

}

 
