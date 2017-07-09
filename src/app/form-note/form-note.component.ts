import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
// service
import { ServiceNoteService } from './../service-note.service';
// model 
import { NoteModel } from './../note-model';
// angular material
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class FormNoteComponent implements OnInit {

  // form
  noteForm : FormGroup;
  // data
  noteIndex;
  noteData : NoteModel;
  // subscription
  routeSubscription : Subscription;

  constructor(
    private fb : FormBuilder,
    private activatedRoute : ActivatedRoute,
    private serviceNoteService : ServiceNoteService,
    private snackBar : MdSnackBar,
    private router : Router
  ) { 

  }


  openSnackBar() {
     this.snackBar.open('note berhasil diubah', 'sukses', {
      duration: 2000,
    });
  }

  ngOnDestroy(){
    // unsubscribe activated route saat komponen destroyed.
    if(this.routeSubscription){
      this.routeSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    // insiiasi from setelah note data 
    this.noteForm = this.fb.group({
      isi_note : this.fb.control('', [Validators.required]),
      judul_note : this.fb.control('', [Validators.required])
    });

    // get note index
    this.routeSubscription = this.activatedRoute.params.subscribe(
      (res) => {
        this.noteIndex = res['id'];

        // set value dari mongodb
        this.serviceNoteService.getNoteSingle(this.noteIndex).subscribe(
          (res) => {
            this.noteForm.controls['isi_note'].setValue(res[0]['isi_note']);
            this.noteForm.controls['judul_note'].setValue(res[0]['isi_note']);
          }
        )

      }
    )
  }

  onSubmit(value){
    let newTimetamp = new Date().getTime();
    value.date_updated = newTimetamp.toString();
    this.serviceNoteService.ubahNote(value, this.noteIndex).subscribe(
      (res) => {
        this.openSnackBar();
      }
    )
  }

}
