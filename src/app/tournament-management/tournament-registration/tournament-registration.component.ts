import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material'
@Component({
  selector: 'app-tournament-registration',
  templateUrl: './tournament-registration.component.html',
  styleUrls: ['./tournament-registration.component.css']
})
export class TournamentRegistrationComponent implements OnInit {
  startDate = new Date(1990, 0, 1);

  constructor() { }

  ngOnInit() {
  }

}
