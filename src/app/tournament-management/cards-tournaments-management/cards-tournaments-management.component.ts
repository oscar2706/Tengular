import { Component, OnInit } from '@angular/core';
 
export interface Tournament{
  nombre:string;
  estado: string;
  descripcion:string;
 }

@Component({
  selector: 'app-cards-tournaments-management',
  templateUrl: './cards-tournaments-management.component.html',
  styleUrls: ['./cards-tournaments-management.component.css']
})
export class CardsTournamentsManagementComponent implements OnInit {

  tournament: Tournament={
    nombre: 'Tengular Tournament',
    estado: 'Activo',
    descripcion: 'Torneo Tengular con validación de la ATP',
  }
  constructor() { }

  ngOnInit() {
  }

}
