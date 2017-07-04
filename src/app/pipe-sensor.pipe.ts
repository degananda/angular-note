import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSensor'
})
export class PipeSensorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let currentValue : String = value;
    let newValue : String = currentValue.toLowerCase().replace("hello", "censored");
    return newValue;
  }

}
