import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Player, PlayerFromAPI, } from "../models/player.model";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  urlATP = "https://vbarbaresi.opendatasoft.com/api/records/1.0/search/?dataset=atp-rankings&rows=100&sort=-current_rank&facet=player_country&facet=current_rank";
  urlWTA = "https://vbarbaresi.opendatasoft.com/api/records/1.0/search/?dataset=wta-rankings&rows=100&sort=-current_rank&facet=current_rank&facet=player_country"
  constructor (private http: HttpClient) { }

  private extractData (res: Response) {
    let body = res;
    return body || {};
  }

  public getAtpRanking (): Observable<any> {
    return this.http.get(this.urlATP).pipe(map(this.extractData));
  }

  public getWtaRanking (): Observable<any> {
    return this.http.get(this.urlWTA).pipe(map(this.extractData));
  }
}
