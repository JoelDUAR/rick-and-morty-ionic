import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private _httpClient: HttpClient) { }
  
  getAllCharacters():Observable<any> { 
    return this._httpClient.get('https://rickandmortyapi.com/api/character')
  }

  getCharacterById(idCharacter: string):Observable<any> { 
    console.log(idCharacter);
    
    return this._httpClient.get(`https://rickandmortyapi.com/api/character/${idCharacter}`)
  }
}
