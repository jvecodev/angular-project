import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  standalone: false,
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {

  @Input () user: User = {
    username: '',
    age: 0
  };

}
