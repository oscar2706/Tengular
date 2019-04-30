import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];

  constructor (private userService: UserService) { }

  ngOnInit () { }
  images = [1, 2, 3].map(() => `https://picsum.photos/1000/600?random&t=${Math.random()}`);
}
