import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css']
})
export class PlayerRegistrationComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  value = ' ';
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  constructor() { }

  ngOnInit() {
  }

}
