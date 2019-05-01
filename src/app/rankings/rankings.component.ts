import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { PlayerFromAPI } from '../models/player.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  styleUrls: ['rankings.component.css'],
  templateUrl: 'rankings.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class RankingsComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['position', 'player', 'points'];
  expandedElement: ranking1 | null;

  api: any;
  playersATP: Array<PlayerFromAPI> = [];
  playersWTA: Array<PlayerFromAPI> = [];
  currentFlag = '';

  //Para las banderas
  //https://www.thebasetrip.com/en/documentation/v3/basic
  //https://assets.thebasetrip.com/api/v2/countries/flags/france.png
  //https://assets.thebasetrip.com/api/v2/countries/flags/france.svg
  //Hay banderas que no se muestran por el nombre como la de USA (United States)
  //que en la api deberia escribirse como united-states, se puede arreglar haciendo una tubería.

  flagURL = "https://assets.thebasetrip.com/api/v2/countries/flags/";
  constructor (private atpRankingService: PlayerService) { }

  printPlayers () {
    console.log(this.playersATP);
    console.log(this.playersWTA);
    this.playersATP.forEach(element => {
      element.flag_url = this.flagURL.concat(element.player_country.toLowerCase().concat('.png'));;
    });
    this.currentFlag = this.playersATP[1].flag_url;
  }

  getRanking () {
    this.atpRankingService.getAtpRanking().subscribe(
      data => {
        this.api = data;
        this.api.records.forEach(player => {
          this.playersATP.push(player.fields);
        });
      }
    );
    this.atpRankingService.getWtaRanking().subscribe(
      data => {
        this.api = data;
        this.api.records.forEach(player => {
          this.playersWTA.push(player.fields);
        });
      }
    );
  }
  ngOnInit () {
    this.getRanking();
  }

}


export interface ranking1 {
  position: number;
  player: string;
  points: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: ranking1[] = [
  {
    position: 1,
    player: 'Novak Đoković',
    points: 11070,
    symbol: 'SRB',
    description: `Es un tenista profesional serbio ganador de 15 torneos de Grand Slam cifra que lo ubica en el 3er lugar de máximos ganadores de Grand Slam en todos los tiempos solo por detrás de ,Roger Federer con 20 y Rafael Nadal con 17. Además cuenta con 5 ATP World Tour Finals, y actualmente ocupa el número 1 en el Ranking ATP de tenistas individuales.`
  }, {
    position: 2,
    player: 'Rafael Nadal',
    points: 8725,
    symbol: 'ESP',
    description: `Es un tenista profesional español que ocupa actualmente la segunda posición del ranking ATP.
    Está considerado uno de los mejores tenistas de la historia y el mejor de todos los tiempos en pistas de tierra batida.7​8​9​10​ Hasta la fecha ha sido campeón de 17 torneos de Grand Slam, lo que le coloca como el segundo jugador profesional con más títulos "grandes" en la historia del tenis, tras el suizo Roger Federer (20 títulos). `
  }, {
    position: 3,
    player: 'Alexander Zverev',
    points: 6040,
    symbol: 'GER',
    description: `Es un tenista alemán de ascendencia rusa. Su ranking más alto a nivel individual ha sido el puesto n.º 3, conseguido el 6 de noviembre de 2017. Al terminar la temporada 2015 en el puesto 81º del mundo con solo 18 años, fue premiado por la ATP como el tenista más joven en el Top 100.`
  }, {

    position: 4,
    player: 'Roger Federer',
    points: 5590,
    symbol: 'SUI',
    description: `Es un tenista suizo12​, actualmente ocupa el cuarto lugar en la Clasificación de la ATP. Federer ha ganado 20 títulos individuales en torneos Grand Slam, el mayor número de toda la historia en tenis masculino y ha mantenido el puesto número 1 en el ranking de la ATP por un tiempo récord de 310 semanas, 237 consecutivas.`
  }, {

    position: 5,
    player: '	Dominic Thiem',
    points: 4765,
    symbol: 'AUT',
    description: `Es un jugador de tenis austriaco, que actualmente ocupa la cuarta posición del Ranking ATP. Su mejor posición en el ranking fue n.º 4 conseguida el 6 de octubre de 2017, mientras que en dobles alcanzó el puesto n.º 86 el 3 de octubre de 2016.`
  }, {

    position: 6,
    player: 'Kei Nishikori',
    points: 4200,
    symbol: 'JPN',
    description: `Es un jugador de tenis japonés. Actualmente se ubica en el puesto 7 del ranking ATP. Es el número 1 de Japón, y el mejor tenista asiático de la historia.
    En 2006 ganó su primer título profesional (Future) México F18 en la ciudad de Mazatlán, con solo 16 años. En 2007 se clasificó para su primer evento de ATP en el Torneo de Los Ángeles.`
  }, {

    position: 7,
    player: 'Kevin Anderson',
    points: 4115,
    symbol: 'RSA',
    description: `Es un jugador de tenis sudafricano, que actualmente ocupa el sexto lugar del ranking ATP, consiguió su mejor ranking el 16 de julio de 2018 al situarse en el puesto 5° tras ser finalista en Wimbledon 2018.`
  }, {

    position: 8,
    player: '	Stefanos Tsitsipas',
    points: 3240,
    symbol: 'GRE',
    description: `Es un tenista profesional griego que compite como profesional desde 2016. Tiene como mejor ranking individual en la ATP el 10º, que alcanzó el 4 de marzo de 2019. En la modalidad de dobles alcanzó el puesto número 315 del mundo el 24 de julio de 2017. Ha ganado un total de cinco títulos ITF Futures en individual, así como seis títulos de dobles.`
  }, {

    position: 9,
    player: '	Juan Martín Del Potro',
    points: 3225,
    symbol: 'ARG',
    description: `Es un tenista argentino que compite como profesional desde 2005. Actualmente ocupa el noveno lugar del Ranking ATP.
    Comenzó a practicar tenis a los siete años.3​En agosto de 2008, se convirtió en el primer jugador en la historia de la ATP en ganar cuatro torneos consecutivos en condición de debutante.`
  }, {

    position: 10,
    player: 'John Isner',
    points: 3085,
    symbol: 'USA',
    description: ` Es un tenista profesional estadounidense, actualmente ocupa la undécima posición del Ranking ATP.
    Consiguió su mejor ranking en la ATP el 16 de julio de 2018, cuando apareció como número 8 del mundo. Tras ganar el Masters de Miami, igualó dicha posición el 2 de abril de 2018. Destaca por su poderoso servicio y altura de 2,07 metros. `
  },
];