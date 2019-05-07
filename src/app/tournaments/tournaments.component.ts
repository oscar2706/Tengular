import { Component, OnInit, Inject } from '@angular/core';
import { Tournament } from '../models/tournament.model';
import { TournamentService } from '../services/tournament.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { MockResourceLoader } from '@angular/compiler/testing';

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

export interface More {
  value:number;
}
@Component({

  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})


export class TorneosComponent implements OnInit {
 
  tournaments: Tournament[];
  
  cats: Cat[] = [
    {value: 'varonil-0', viewValue: 'Varonil'},
    {value: 'femenil-1', viewValue: 'Femenil'},
    {value: 'mixto-2', viewValue: 'Mixto'}
  ];

  mods: Mod[] = [
    {value: 'sencillos-0', viewValue: 'Sencillos'},
    {value: 'dobles-1', viewValue: 'Dobles'}
  ];

  gens: Gen[] = [
    {value: 'femenino-0', viewValue: 'Femenino'},
    {value: 'masculino-1', viewValue: 'Masculino'}
  ];

  more:More={
    value:3
  }

  constructor(
    private tournamentService: TournamentService,

    ) { }

  onClick(){
    this.more.value=this.more.value+3;
  }

  ngOnInit() {
    this.tournamentService.getTournament().subscribe(tournaments => {
      this.tournaments = tournaments;
      console.log(this.tournaments);
    });
  }



}
