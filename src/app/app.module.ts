import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment'; 
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TorneosComponent } from './torneos/torneos.component';
import { CardsTorneosComponent } from './torneos/cards-torneos/cards-torneos.component';
import { CardsJugadoresComponent } from './torneos/cards-jugadores/cards-jugadores.component';
import { ScoresComponent } from './scores/scores.component';
import { DateResultsComponent } from './scores/date-results/date-results.component'; 
import { RankingsComponent } from './rankings/rankings.component';
import { BrochureViewComponent } from './brochure-view/brochure-view.component';
import { CdkTableModule } from '@angular/cdk/table';

//Material components
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { MaterialElevationDirective } from './material-elevation.directive';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'resultados', component: ScoresComponent},
  {path: 'rankings', component: RankingsComponent},
  {path: 'torneos', component: TorneosComponent},
  {path: 'convocatorias', component: BrochureViewComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MaterialElevationDirective,
    TorneosComponent,
    CardsJugadoresComponent,
    CardsTorneosComponent,
    ScoresComponent,
    DateResultsComponent,
    RankingsComponent,
    BrochureViewComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    CdkTableModule,
    RouterModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Tengular'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
