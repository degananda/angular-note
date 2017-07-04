import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-com-search',
  templateUrl: './com-search.component.html',
  styleUrls: ['./com-search.component.css']
})
export class ComSearchComponent implements OnInit {

  @Output() searchQueryElement = new EventEmitter();
  // loading untuk komponen listnote(external komponen)
  @Output() onSearchLoading = new EventEmitter();

  // timer
  searchTimer : any;
  // loading internal komponen com-search
  onLoading = false;

  constructor() { }

  ngOnInit() {
  }

  startTyping(value){
    // set onloading status menjadi true
    this.onLoading = true;
    this.onSearchLoading.emit(true);

    if(this.searchTimer){
      clearTimeout(this.searchTimer); 
    }

    // start timer setelah typing
    this.searchTimer = setTimeout((a) => {
      // emit keyword yang disearch
        this.searchQueryElement.emit(value);
        this.onLoading = false;
        this.onSearchLoading.emit(false);
    }, 1500);
  }

  endTyping(){
    clearTimeout(this.searchTimer);
  }

}
