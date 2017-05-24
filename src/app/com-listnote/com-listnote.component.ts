import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-listnote',
  templateUrl: './com-listnote.component.html',
  styleUrls: ['./com-listnote.component.css']
})
export class ComListnoteComponent implements OnInit {

  noteList : Array<string> = [];

  constructor() { }

  ngOnInit() {
    this.noteList[0] = "hello ini note pertama";
    this.noteList[1] = "hello ini note kedua";
    this.noteList[2] = "hello ini note ketiga";
  }

  onDeleteNote(id){
    alert('melakukan delete note');
    console.log(id);
  }

}
