import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users:any = [];

  constructor(
    private _usersService:UsersService,
  ) { }

  async ngOnInit() {
    await this.getAllUsers();

    console.log(this.users);
    
  }

  async getAllUsers() {
    let usersP = new Promise((resolve, reject) => {
      this._usersService.getAllCharacters().subscribe((usersRes) => {
        if (!usersRes) reject(usersRes);

        this.users = usersRes.results;
        resolve(usersRes);
      });
    });
    let result = await usersP;
    return result;
  }

}
