import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {

  users: string[] = [
    'John Doe',
    'Jane Smith',
    'Alice Johnson',
    'Bob Brown',
    ];

}
