import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-com-search',
  templateUrl: './com-search.component.html',
  styleUrls: ['./com-search.component.css']
})
export class ComSearchComponent implements OnInit {

  @Output() searchQueryElement = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSearchChange(text){
    this.searchQueryElement.emit(text);
  }

}