import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.css']
})
export class RefereeComponent implements OnInit {
  selectedTournamentId = 'wJH4HC8cSJs6ArEmFuGF';
  tournamentName = 'Primavera 2019';
  modalitySelected = 'option1';
  categorySelected = 'option1';

  constructor (private router: Router) { }
  ngOnInit () { }

  onLoadTournament () {
    this.router.navigate(['arbitro', this.selectedTournamentId]);
  }

  onLoadTournamentManagment () {
    this.router.navigate(['admin/torneo/', this.tournamentName]);
  }
}
