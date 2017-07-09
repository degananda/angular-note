import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// class
import { NoteModel } from './note-model';
// model 

@Injectable()
export class ServiceNoteService {

  listNote : any = [];

  constructor(
    private http : Http
  ) { 
  }

  getNote() : Observable<NoteModel[]>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let username : string = 'degananda';
    let password : string = 'indonesiaraya';           
    headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    let options       = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:7250/note', options).map(
      (res : Response) => res.json()
    );
  }

  addNote(note : NoteModel) : Observable<any>{
    //this.listNote.push(note);
    let requestBody = JSON.stringify(note);
    let headers = new Headers({'Content-Type': 'application/json'});
    let username : string = 'degananda';
    let password : string = 'indonesiaraya';           
    headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    let options       = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:7250/note', requestBody, options).map(
      (res : Response) => res.json()
    );


  }

  getNoteSingle(id) : Observable<NoteModel>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let username : string = 'degananda';
    let password : string = 'indonesiaraya';           
    headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    let options       = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:7250/note/'+id, options).map(
      (res : Response) => res.json()
    );
  }

  ubahNote(note : NoteModel,id) : Observable<any>{
    let requestBody = JSON.stringify(note);
    let headers = new Headers({'Content-Type': 'application/json'});
    let username : string = 'degananda';
    let password : string = 'indonesiaraya';           
    headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    let options       = new RequestOptions({ headers: headers });
    return this.http.put('http://localhost:7250/note/'+id, requestBody, options).map(
      (res : Response) => res.json()
    );
  }

  deleteNote(id){
    let headers = new Headers({'Content-Type': 'application/json'});
    let username : string = 'degananda';
    let password : string = 'indonesiaraya';           
    headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    let options       = new RequestOptions({ headers: headers });
    return this.http.delete('http://localhost:7250/note/'+id, options).map(
      (res : Response) => res.json()
    );
  }

}
