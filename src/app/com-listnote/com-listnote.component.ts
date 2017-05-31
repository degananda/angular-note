import { Component, OnInit } from '@angular/core';
import { ServiceNoteService } from './../service-note.service';
import { NoteModel } from './../note-model';

@Component({
  selector: 'app-com-listnote',
  templateUrl: './com-listnote.component.html',
  styleUrls: ['./com-listnote.component.css']
})
export class ComListnoteComponent implements OnInit {

  listNote : Array<NoteModel>;

  constructor(
    private serviceNoteService : ServiceNoteService
  ) { }

  ngOnInit() {
    this.listNote = this.serviceNoteService.getNote();
  }

  onDeleteNote(note : NoteModel){
    this.serviceNoteService.deleteNote(note);
  }

}
