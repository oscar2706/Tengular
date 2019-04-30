import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {


  constructor(

    private dialog: MatDialog)  { }
  
  ngOnInit() {
  }


  
}