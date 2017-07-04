import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSort',
  pure : false
})
export class PipeSortPipe implements PipeTransform {

  transform(value: Array<string>, searchType: string): any {
    value.sort(
      (a : any,b : any) => {
          // melakukan descending sort.
          let noteA = a.isi_note;
          let noteB = b.isi_note;
          if (noteA < noteB) {
            return -1;
          } else if (noteA > noteB) {
            return 1;
          } else {
            // note sama
            return 0;
          }
      }
    );
    if(searchType.toLocaleLowerCase() == "desc"){
      value.reverse();
    }
    return value;
  }

}
