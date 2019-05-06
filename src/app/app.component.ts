import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './login/login.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (public dialog: MatDialog) { }
  images = [1, 2, 3].map(() => `https://picsum.photos/1000/600?random&t=${Math.random()}`);
  openDialog (): void {
    const dialogRef = this.dialog.open(LoginComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  
  closeDialog() : void {
    const dialogRef = this.dialog.closeAll();

  }

  ngOnInit(){
    AOS.init({
      duration: 1500,
    });
  }
}
