import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteModel } from './../note-model';
import { Router } from '@angular/router';
// services
import { ServiceNoteService } from './../service-note.service';

@Component({
  selector: 'app-com-note',
  templateUrl: './com-note.component.html',
  styleUrls: ['./com-note.component.css']
})
export class ComNoteComponent implements OnInit {

  @Input() isiNote;
  @Output() onDelete = new EventEmitter();

  // styling
  isVisible = true;

  tanggalNote : any;

  constructor(
    private router : Router,
    private serviceNoteService : ServiceNoteService
  ) { 
  }

  /*
   Lifecycle hook.
  */

  ngOnInit() {
    // menginisiasi isi dari note.
    this.tanggalNote = new Date().getTime();
  }

  /*
    Event action.
  */
  
  deleteNote(){
    // emit id dari note, karena kita belum membuat model dan service dari note maka sementara kita isikan "1" sebagai id dummy. 
    this.onDelete.emit(this.isiNote._id);
  }
  
  /*
    Element styling
  */

  onShowHide(){
    // set nilai isVisible dengan nilai kebalikannya.
    this.isVisible = !this.isVisible;
  }

  setShowHideStyle(){
    if(this.isVisible){
      // jika nilai visible true maka element di tampilkan
      return 'block';
    } else {
      // jika nilai visible false maka element di hilangkan
      return 'none';
    }
  }

}

