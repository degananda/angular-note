import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-note',
  templateUrl: './com-note.component.html',
  styleUrls: ['./com-note.component.css']
})
export class ComNoteComponent implements OnInit {

  isi_note : String;
  tanggalNote : any;

  constructor() { 
  }

  /*
   Lifecycle hook.
  */

  ngOnInit() {
    // menginisiasi isi dari note.
    this.isi_note = 'Hello ini note saya';
    this.tanggalNote = new Date().getTime();
  }

  /*
    Event action.
  */

  editNote(){
    // mengubah isi note.
    this.isi_note = 'Hello note ini telah diubah.';
  }

}

