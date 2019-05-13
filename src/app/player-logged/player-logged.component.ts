import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../models/player.model';
import { PlayerService } from '../services/player.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';


export interface Match {
  result?: boolean;
  opponentName: string;
  round: string;
  tournament: string;
  matchDate: string;
}

const NEXT_MATCHES: Match[] = [
  { opponentName: "Rafael Nadal", round: '1/4 de final', tournament: "Primavera 2019", matchDate: 'Hoy - 16:00' },
  { opponentName: "Novak Djokovic", round: 'final', tournament: "ATP 100 Miami", matchDate: 'Mañana - 15:00' },
  { opponentName: "Alexander Zverev", round: '1/8 de final', tournament: "Verano 2019", matchDate: '18/05/2019 - 17:00' },
];

const MATCHES: Match[] = [
  { result: true, opponentName: "Rafael Nadal", round: '1/4 de final', tournament: "Primavera 2019", matchDate: 'Ayer - 15:30' },
  { result: false, opponentName: "Novak Djokovic", round: 'semifinal', tournament: "ATP 1000 Miami", matchDate: '03/03/2019 - 12:30' },
  { result: true, opponentName: "Alexander Zverev", round: '1/8 de final', tournament: "Verano 2019", matchDate: '03/03/2019 - 13:30' },
  { result: true, opponentName: "Fabio Fognini", round: '1/4 de final', tournament: "ATP 1000 California", matchDate: '03/03/2019 - 17:30' },
  { result: false, opponentName: "Milos Raonic", round: 'final', tournament: "Primavera 2019", matchDate: '03/03/2019 - 14:00' },
];

@Component({
  selector: 'app-player-logged',
  templateUrl: './player-logged.component.html',
  styleUrls: ['./player-logged.component.css']
})
export class PlayerLoggedComponent implements OnInit {
  
  playerIn: Player = {
    imageP: '',
  }
  players: Player[];

  displayedColumns: string[] = ['opponentName', 'round', 'tournament', 'matchDate'];
  sourceNextMatches = NEXT_MATCHES;
  displayedColumns2: string[] = ['result', 'opponentName', 'round', 'tournament', 'matchDate'];
  sourceMatches = MATCHES;

  constructor (private route: ActivatedRoute, private playerService: PlayerService, private storage: AngularFireStorage) { }
  urlImage: Observable<string>;
  ngOnInit () {

    this.playerService.getPlayer().subscribe(players => {
      this.players = players;
      console.log(this.players);
    });
    
    let license = this.route.snapshot.paramMap.get('password');
    console.log(license);
    this.playerService.getPlayerSelectLicense(license).subscribe(players => {
      this.players = players;
      console.log(this.players);
    });
  
  }
  onGuardarP(myForm: NgForm){
    if(myForm.valid == true)
    {
    let imgUrl : string = document.getElementById("imagenP").innerHTML.toString();
    this.playerIn.imageP = imgUrl;
    this.playerService.addPlayer(this.playerIn);
    }
    else{
      console.log("Formulario no valido");
    }
  }

  onUpload(e)
  {
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `players/player_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL())).subscribe(); 
  }

}
