import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  idUser!: string;
  user: any;

  constructor(
    private _usersService:UsersService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.idUser = this._activatedRoute.snapshot.paramMap.get('id')!;

    await this.getUserById(this.idUser);

    console.log(this.user);
    
  }

  async getUserById(idUser: string){
    let userP = new Promise((resolve, reject) =>{
      this._usersService.getCharacterById(idUser).subscribe((userRes) =>{
        if (!userRes) reject(userRes);

        this.user = userRes;
        resolve(userRes);
      });
    })
    let result = await userP;
    return result;
  };

}
