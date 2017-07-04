import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSearch',
  pure : false
})
export class PipeSearchPipe implements PipeTransform {

  transform(value : any, querystring: any): any {
    return value.filter(
      (note) => note.isi_note.toLowerCase().indexOf(querystring.toLowerCase()) > -1
    );
  }

}