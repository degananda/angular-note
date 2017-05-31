import { Injectable } from '@angular/core';
// class
import { NoteModel } from './note-model';
// model 

@Injectable()
export class ServiceNoteService {

  listNote : Array<NoteModel> = [];

  constructor() { 
  }

  getNote(){
    return this.listNote;
  }

  addNote(note : NoteModel){
    this.listNote.push(note);
  }

  getNoteSingle(noteIndex){
    return this.listNote[noteIndex];
  }

  getNoteIndex(note : NoteModel){
    // mencari index dari note terkait.
    return this.listNote.indexOf(note);
  }

  ubahNote(noteIndex, newNote : NoteModel){
    // mencari index dari note terkait.
    this.listNote[noteIndex] = newNote;
  }

  deleteNote(note : NoteModel){
    // mencari index dari note terkait.
    let noteIndex = this.listNote.indexOf(note);
    this.listNote.splice(noteIndex, 1);
  }

}
