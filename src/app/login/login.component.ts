import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { Router } from '@angular/router';
import { User } from '../models/user.model'
import { UserService } from '../services/user.service';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userTypeReturned: number;
  user: User = {
    name: '',
    password: ''
  }

  updateName (event) {
    console.log(event.target.value);
    this.user.name = event.target.value;
  }

  updatePassword (event) {
    console.log(event.target.value);
    this.user.password = event.target.value;
  }

  loggUser () {
    this.userTypeReturned = this.userService.logUser(this.user);
    console.log(this.userTypeReturned)
    switch (this.userTypeReturned) {
      case 0:
        this.router.navigate(['admin']);
        break;
      case 1:
        this.router.navigate(['usuario']);
        break;
      case 2:
        this.router.navigate(['arbitro']);
        break;

      default:
        break;
    }
  }
  constructor (private dialog: MatDialog, private router: Router, private userService: UserService) { }

  ngOnInit () {
    this.loggUser();
  }

}