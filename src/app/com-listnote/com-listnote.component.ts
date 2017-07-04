import { Component, OnInit } from '@angular/core';
import { ServiceNoteService } from './../service-note.service';
import { NoteModel } from './../note-model';
// angular material
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-com-listnote',
  templateUrl: './com-listnote.component.html',
  styleUrls: ['./com-listnote.component.css'],
})
export class ComListnoteComponent implements OnInit {

  listNote : Array<NoteModel>;
  searchQuery = "";

  constructor(
    public serviceNoteService : ServiceNoteService,
    private snackBar : MdSnackBar
  ) { }

  openSnackBar() {
     this.snackBar.open('note telah dihapus', 'sukses', {
      duration: 2000,
    });
  }

  doSearch(value){
    // set serachQuery property
    this.searchQuery = value;
  }


  ngOnInit() {
    this.listNote = this.serviceNoteService.getNote();
  }

  onDeleteNote(note : NoteModel){
    this.serviceNoteService.deleteNote(note);
    this.openSnackBar();
  }

}