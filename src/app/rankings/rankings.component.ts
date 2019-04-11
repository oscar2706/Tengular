import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';


export interface rankingsTable {
  name: string;
  position: number;
  points: number;
}


const ELEMENT_DATA: rankingsTable[] = [
  {position: 1, name: 'Novak Dokovic', points: 11070},
  {position: 2, name: 'Rafael Nadal', points: 8725},
  {position: 3, name: 'Alexander Zverev', points: 6040},
  {position: 4, name: 'Roger Federer', points: 5590},
  {position: 5, name: 'Dominic Thiem', points: 4765},
  {position: 6, name: 'Kei Nishikori', points: 4200},
  {position: 7, name: 'Kevin Anderson', points: 4115},
  {position: 8, name: 'Stefanos Tsitsipas', points: 3240},
  {position: 9, name: 'Juan Martín del Potro', points: 3225},
  {position: 10, name: 'John Isner', points: 3085},
];


@Component({
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})

export class RankingsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'points'];
  dataSource = new ExampleDataSource();
  constructor() { }

  ngOnInit() {
  }

}

export class ExampleDataSource extends DataSource<rankingsTable>{
  
  data = new BehaviorSubject<rankingsTable[]>(ELEMENT_DATA);

  connect(): Observable<rankingsTable[]> {
    return this.data;
  }

  disconnect() {}
}
