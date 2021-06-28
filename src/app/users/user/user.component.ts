import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UsersService]
})
export class UserComponent implements OnInit {
@Input() users:User[]=[];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users=this.usersService.getUsers();
  }

  deleteUser(id: number){
    this.usersService.deleteUser(id);
    this.users=this.usersService.getUsers();
  }

}
