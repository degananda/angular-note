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

  searchQuery = "";
  onSearchLoading = false;
  searchTypeValue: string = 'asc';

  sortOption = [
    {value: 'asc', viewValue: 'ascending'},
    {value: 'desc', viewValue: 'descending'},
  ];

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

  onLoadingChange(value){
    this.onSearchLoading = value;
  }
  
  ngOnInit() {
    this.getCurrentNote();
  }

  getCurrentNote(){
    this.serviceNoteService.getNote().subscribe(
      (res) => {
        this.serviceNoteService.listNote = res;
      }
    )
  }

  onDeleteNote(id){
    this.serviceNoteService.deleteNote(id).subscribe(
      (res) => {
          this.openSnackBar();
          this.getCurrentNote();
      }
    )
  }

}
