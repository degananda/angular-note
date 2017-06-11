import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// services
import { ServiceNoteService } from './../service-note.service';
// model
import { NoteModel } from './../note-model';
// angular material
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-com-addnote',
  templateUrl: './com-addnote.component.html',
  styleUrls: ['./com-addnote.component.css']
})
export class ComAddnoteComponent implements OnInit {

  noteForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private serviceNoteService : ServiceNoteService,
    private snackBar : MdSnackBar
  ) { }

  openSnackBar() {
     this.snackBar.open('note berhasil dibuat', 'sukses', {
      duration: 2000,
    });
  }

  ngOnInit() {
    // inisiasi form
    this.noteForm = this.fb.group({
      isi_note : this.fb.control('', [Validators.required])
    })
  }

  onSubmit(value){
    // menghandle saat form disubmit
    let dateNow = new Date().getTime();
    value.tanggal_note = dateNow;
    let myNote : NoteModel = new NoteModel(value.isi_note, value.tanggal_note);
    this.serviceNoteService.addNote(myNote);
    // reset form
    this.noteForm.reset();
    this.openSnackBar();
  }

}
