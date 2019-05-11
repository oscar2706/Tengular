import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { TournamentRegistrationComponent } from './tournament-registration/tournament-registration.component';
import { PlayerRegistrationComponent } from './player-registration/player-registration.component';
import { Tournament } from '../models/tournament.model';
import { TournamentService } from '../services/tournament.service';
import { Player } from '../models/player.model';
import { PlayerService } from '../services/player.service';

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
tournaments: Tournament[];
players: Player[];
tournamentsFilter: Tournament[] = [];
tamFilter: number = 0;

cat: string = "todas";
mod: string = "todas";

 
  constructor(public dialog: MatDialog, private tournamentService: TournamentService, private playerService: PlayerService) { }
  
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

  closeDialog() : void {
    const dialogRef = this.dialog.closeAll();
  }

  ngOnInit() {
    this.tournamentService.getTournament().subscribe(tournaments => {
      this.tournaments = tournaments;
      if(this.mod == "todas" && this.cat == "todas"){
      this.tournamentsFilter = tournaments;
      }
      console.log(this.tournaments);
    });

    this.playerService.getPlayer().subscribe(players => {
      this.players = players;
      console.log(this.players);
    });
  }

  onFilter()
  {
  //  console.log("modalidad: "+this.mod)
  this.tournamentsFilter = [];
  this.tamFilter = 0;
  if(this.mod != "todas" && this.cat != "todas"){
    for(let i = 0; i<this.tournaments.length; i++)
    {
      if(this.tournaments[i].modality == this.mod && this.tournaments[i].category == this.cat)
      {
        this.tournamentsFilter[this.tamFilter] = this.tournaments[i];
        this.tamFilter++;
        console.log(this.tournamentsFilter[0]);
      }
    }
  }

  if(this.mod == "todas"){
    for(let i = 0; i<this.tournaments.length; i++)
    {
      if(this.tournaments[i].category == this.cat)
      {
        this.tournamentsFilter[this.tamFilter] = this.tournaments[i];
        this.tamFilter++;
        console.log(this.tournamentsFilter[0]);
      }
    }
  }

  if(this.cat == "todas"){
    for(let i = 0; i<this.tournaments.length; i++)
    {
      if(this.tournaments[i].modality == this.mod)
      {
        this.tournamentsFilter[this.tamFilter] = this.tournaments[i];
        this.tamFilter++;
        console.log(this.tournamentsFilter[0]);
      }
    }
  }

  if(this.mod == "todas" && this.cat == "todas"){
    this.tournamentsFilter = this.tournaments;
  }
  }

}

 
