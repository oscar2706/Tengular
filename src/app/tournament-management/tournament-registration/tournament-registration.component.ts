import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material'
@Component({
  selector: 'app-tournament-registration',
  templateUrl: './tournament-registration.component.html',
  styleUrls: ['./tournament-registration.component.css']
})
export class TournamentRegistrationComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  value = ' ';
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  constructor() { }



  ngOnInit() {
  }

}
