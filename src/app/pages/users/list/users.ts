import { Component } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {

  users: User[] = [

    {
      username: 'João',
      age: 23
    },
    {
      username: 'Maria',
      age: 30
    },
    {
      username: 'Pedro',
      age: 28
    }

  ]
}
