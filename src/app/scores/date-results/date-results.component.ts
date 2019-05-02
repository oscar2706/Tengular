import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-results',
  templateUrl: './date-results.component.html',
  styleUrls: ['./date-results.component.css']
})
export class DateResultsComponent implements OnInit {
  defaultElevation = 2;
  raisedElevation = 8;
  borderColor = '';
  constructor () {
    this.borderColor = '';
  }

  getColor () {
    return this.borderColor === '' ? 'orange' : 'blue';
  }

  ngOnInit () {
  }
}
