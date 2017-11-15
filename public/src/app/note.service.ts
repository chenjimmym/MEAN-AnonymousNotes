import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NoteService {

  constructor(private _http: Http) { }
  
  getNotes(callback){
    this._http.get('/show').subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {console.log(err);}
    )
  }

  addNote(message){
    console.log('@@@to be added', message);
    this._http.get(`/add/${message}`).subscribe();
  }
}
